// lib-data.js - shared helpers for the data-pull scripts (pull-seo-data.js, pull-trends.js)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function iso(d) {
  return d.toISOString().slice(0, 10);
}

function addDays(d, n) {
  const x = new Date(d.getTime());
  x.setUTCDate(x.getUTCDate() + n);
  return x;
}

// Reads KEY=value lines from the .env file in the Midwest folder (no extra package needed).
function loadEnv() {
  const file = path.join(ROOT, '.env');
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function getArg(name, fallback) {
  const a = process.argv.find((x) => x.startsWith('--' + name + '='));
  return a ? a.split('=').slice(1).join('=') : fallback;
}

function hasFlag(name) {
  return process.argv.includes('--' + name);
}

function csvCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function toCsv(rows, columns) {
  if (!rows.length) return (columns || []).join(',') + '\n';
  const cols =
    columns ||
    Array.from(
      rows.reduce((set, r) => {
        Object.keys(r).forEach((k) => set.add(k));
        return set;
      }, new Set())
    );
  return (
    cols.join(',') +
    '\n' +
    rows.map((r) => cols.map((c) => csvCell(r[c])).join(',')).join('\n') +
    '\n'
  );
}

// Every pull is saved twice: a dated snapshot (history) and data/latest (always current).
function outDirs() {
  const today = iso(new Date());
  const dirs = [
    path.join(ROOT, 'data', 'snapshots', today),
    path.join(ROOT, 'data', 'latest'),
  ];
  dirs.forEach((d) => fs.mkdirSync(d, { recursive: true }));
  return dirs;
}

function writeAll(dirs, name, text) {
  dirs.forEach((d) => fs.writeFileSync(path.join(d, name), text, 'utf8'));
}

module.exports = {
  ROOT,
  iso,
  addDays,
  loadEnv,
  getArg,
  hasFlag,
  toCsv,
  outDirs,
  writeAll,
};
