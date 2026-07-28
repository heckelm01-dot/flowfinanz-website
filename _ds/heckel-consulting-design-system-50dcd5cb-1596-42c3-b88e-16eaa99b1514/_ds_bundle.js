/* @ds-bundle: {"format":4,"namespace":"HeckelConsultingDesignSystem_50dcd5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b2130ee4799f","components/core/Button.jsx":"9a1808e1c6bc","components/core/Card.jsx":"010f8604954c","components/core/IconButton.jsx":"4aaa9a577bd7","components/core/Logo.jsx":"8fb974ee11df","components/core/Stat.jsx":"632fb772c1ad","components/core/Tag.jsx":"e0540113adc9","components/feedback/Alert.jsx":"4d09a71de408","components/forms/Checkbox.jsx":"64e8bd335670","components/forms/Input.jsx":"812dd80c5cb9","components/forms/Radio.jsx":"4fc700b1eb06","components/forms/Select.jsx":"d6e50722762b","components/forms/Switch.jsx":"226c49e0cdd6","components/forms/Textarea.jsx":"f651372db41b","ui_kits/website/site-app.jsx":"c7f4c3c153b1","ui_kits/website/site-sections.jsx":"56ad7bf1769e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HeckelConsultingDesignSystem_50dcd5 = window.HeckelConsultingDesignSystem_50dcd5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-sans); font-weight:var(--weight-semibold); font-size:var(--text-xs);
  line-height:1; padding:5px 10px; border-radius:var(--radius-full); white-space:nowrap;
}
.hc-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
/* soft (default) */
.hc-badge--brand{ background:var(--color-brand-soft); color:var(--color-brand-strong); }
.hc-badge--neutral{ background:var(--gray-100); color:var(--gray-700); }
.hc-badge--success{ background:var(--color-success-bg); color:var(--color-success); }
.hc-badge--warning{ background:var(--color-warning-bg); color:var(--color-warning); }
.hc-badge--danger{ background:var(--color-danger-bg); color:var(--color-danger); }
.hc-badge--info{ background:var(--color-info-bg); color:var(--color-info); }
/* solid */
.hc-badge--solid.hc-badge--brand{ background:var(--color-brand); color:#fff; }
.hc-badge--solid.hc-badge--neutral{ background:var(--gray-700); color:#fff; }
.hc-badge--solid.hc-badge--success{ background:var(--color-success); color:#fff; }
.hc-badge--solid.hc-badge--warning{ background:var(--color-warning); color:#fff; }
.hc-badge--solid.hc-badge--danger{ background:var(--color-danger); color:#fff; }
.hc-badge--solid.hc-badge--info{ background:var(--color-info); color:#fff; }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-badge-css')) {
  const s = document.createElement('style');
  s.id = 'hc-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  color = 'brand',
  solid = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['hc-badge', `hc-badge--${color}`, solid ? 'hc-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "hc-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-btn{
  --_bg:var(--color-brand); --_fg:var(--text-on-brand); --_bd:transparent; --_sh:none;
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  border:1px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-md); cursor:pointer; text-decoration:none; white-space:nowrap;
  box-shadow:var(--_sh);
  transition:transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out),
             box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), opacity var(--dur) var(--ease-out);
}
.hc-btn:focus-visible{ outline:none; box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-btn:active{ transform:translateY(1px); }
.hc-btn[disabled],.hc-btn[aria-disabled="true"]{ opacity:.5; pointer-events:none; }
/* sizes */
.hc-btn--sm{ height:36px; padding:0 14px; font-size:var(--text-sm); }
.hc-btn--md{ height:44px; padding:0 20px; font-size:var(--text-base); }
.hc-btn--lg{ height:54px; padding:0 28px; font-size:var(--text-md); }
.hc-btn--block{ width:100%; }
/* variants */
.hc-btn--primary{ --_bg:var(--color-brand); --_fg:#fff; --_sh:var(--shadow-sm); }
.hc-btn--primary:hover{ --_bg:var(--color-brand-strong); --_sh:var(--shadow-brand); }
.hc-btn--gradient{ background:var(--gradient-brand-45); --_fg:#fff; --_sh:var(--shadow-sm); border-color:transparent; }
.hc-btn--gradient:hover{ --_sh:var(--shadow-brand); filter:saturate(1.05); }
.hc-btn--secondary{ --_bg:#fff; --_fg:var(--text-primary); --_bd:var(--border-strong); }
.hc-btn--secondary:hover{ --_bg:var(--gray-50); --_bd:var(--gray-400); }
.hc-btn--ghost{ --_bg:transparent; --_fg:var(--color-brand); }
.hc-btn--ghost:hover{ --_bg:var(--color-brand-soft); }
.hc-btn--danger{ --_bg:var(--color-danger); --_fg:#fff; }
.hc-btn--danger:hover{ filter:brightness(.94); }
.hc-btn__spin{ width:1em; height:1em; border-radius:50%; border:2px solid currentColor; border-top-color:transparent; animation:hc-spin .6s linear infinite; }
@keyframes hc-spin{ to{ transform:rotate(360deg); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-btn-css')) {
  const s = document.createElement('style');
  s.id = 'hc-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['hc-btn', `hc-btn--${variant}`, `hc-btn--${size}`, fullWidth ? 'hc-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-disabled": disabled || loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "hc-btn__spin",
    "aria-hidden": "true"
  }), !loading && leftIcon, children, !loading && rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-card{
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);
  transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out);
}
.hc-card--pad-sm{ padding:var(--space-4); }
.hc-card--pad-md{ padding:var(--space-6); }
.hc-card--pad-lg{ padding:var(--space-8); }
.hc-card--pad-none{ padding:0; }
.hc-card--flat{ box-shadow:none; }
.hc-card--raised{ box-shadow:var(--shadow-md); }
.hc-card--interactive{ cursor:pointer; }
.hc-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--border-default); }
.hc-card--brand{ border:none; background:var(--gradient-brand); color:#fff; }
.hc-card--ink{ border:none; background:var(--gradient-ink); color:#fff; }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-card-css')) {
  const s = document.createElement('style');
  s.id = 'hc-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  padding = 'md',
  elevation = 'sm',
  // 'flat' | 'sm' | 'raised'
  tone = 'default',
  // 'default' | 'brand' | 'ink'
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['hc-card', `hc-card--pad-${padding}`, elevation === 'flat' ? 'hc-card--flat' : elevation === 'raised' ? 'hc-card--raised' : '', tone === 'brand' ? 'hc-card--brand' : tone === 'ink' ? 'hc-card--ink' : '', interactive ? 'hc-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-iconbtn{
  --_bg:transparent; --_fg:var(--text-secondary); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-md); cursor:pointer;
  transition:background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
             border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.hc-iconbtn svg{ display:block; }
.hc-iconbtn:focus-visible{ outline:none; box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-iconbtn[disabled]{ opacity:.45; pointer-events:none; }
.hc-iconbtn--sm{ width:36px; height:36px; }
.hc-iconbtn--md{ width:44px; height:44px; }
.hc-iconbtn--lg{ width:52px; height:52px; }
.hc-iconbtn--primary{ --_bg:var(--color-brand); --_fg:#fff; }
.hc-iconbtn--primary:hover{ --_bg:var(--color-brand-strong); }
.hc-iconbtn--secondary{ --_bg:#fff; --_fg:var(--text-primary); --_bd:var(--border-strong); }
.hc-iconbtn--secondary:hover{ --_bg:var(--gray-50); }
.hc-iconbtn--ghost{ --_bg:transparent; --_fg:var(--text-secondary); }
.hc-iconbtn--ghost:hover{ --_bg:var(--gray-100); --_fg:var(--text-primary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'hc-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['hc-iconbtn', `hc-iconbtn--${variant}`, `hc-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-logo{ display:inline-flex; align-items:center; gap:12px; font-family:var(--font-sans); line-height:1; }
.hc-logo--stacked{ flex-direction:column; text-align:center; gap:8px; }
.hc-logo__mark{ display:block; height:var(--_mk,40px); width:auto; }
.hc-logo__brand{ font-weight:var(--weight-extrabold); letter-spacing:var(--tracking-tight); color:var(--_ink,var(--ink)); }
.hc-logo__sub{ font-weight:var(--weight-semibold); letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--_sub,var(--text-muted)); margin-top:4px; }
.hc-logo--light{ --_ink:#fff; --_sub:rgba(255,255,255,.72); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-logo-css')) {
  const s = document.createElement('style');
  s.id = 'hc-logo-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: {
    mark: 28,
    brand: 16,
    sub: 8
  },
  md: {
    mark: 40,
    brand: 22,
    sub: 10
  },
  lg: {
    mark: 60,
    brand: 32,
    sub: 13
  }
};
function Logo({
  variant = 'full',
  // 'full' | 'wordmark' | 'stacked'
  tone = 'dark',
  // 'dark' | 'light'
  size = 'md',
  markSrc,
  // path to the bar mark image (assets/mark.png)
  brand = 'Heckel',
  sub = 'Consulting',
  className = '',
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const showMark = variant !== 'wordmark' && markSrc;
  const cls = ['hc-logo', variant === 'stacked' ? 'hc-logo--stacked' : '', tone === 'light' ? 'hc-logo--light' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      '--_mk': `${s.mark}px`
    }
  }, rest), showMark && /*#__PURE__*/React.createElement("img", {
    className: "hc-logo__mark",
    src: markSrc,
    alt: "",
    "aria-hidden": "true",
    style: tone === 'light' ? {
      filter: 'brightness(0) invert(1)'
    } : undefined
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "hc-logo__brand",
    style: {
      fontSize: s.brand
    }
  }, brand), sub && /*#__PURE__*/React.createElement("span", {
    className: "hc-logo__sub",
    style: {
      fontSize: s.sub,
      display: 'block'
    }
  }, sub)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-stat{ font-family:var(--font-sans); }
.hc-stat__value{ font-weight:var(--weight-extrabold); letter-spacing:var(--tracking-tight); line-height:1; color:var(--text-primary); display:flex; align-items:baseline; gap:2px; }
.hc-stat__value--sm{ font-size:var(--text-3xl); }
.hc-stat__value--md{ font-size:var(--text-4xl); }
.hc-stat__value--lg{ font-size:var(--text-5xl); }
.hc-stat__value--gradient{ background:var(--gradient-brand-45); -webkit-background-clip:text; background-clip:text; color:transparent; }
.hc-stat__label{ margin-top:8px; font-size:var(--text-sm); font-weight:var(--weight-semibold); text-transform:uppercase; letter-spacing:var(--tracking-wide); color:var(--text-muted); }
.hc-stat__caption{ margin-top:6px; font-size:var(--text-sm); color:var(--text-secondary); line-height:var(--leading-snug); }
.hc-stat__trend{ display:inline-flex; align-items:center; gap:3px; font-size:var(--text-sm); font-weight:600; margin-left:6px; }
.hc-stat__trend--up{ color:var(--color-success); }
.hc-stat__trend--down{ color:var(--color-danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-stat-css')) {
  const s = document.createElement('style');
  s.id = 'hc-stat-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  prefix,
  suffix,
  label,
  caption,
  size = 'md',
  gradient = false,
  trend,
  // e.g. "+32%"
  trendDir,
  // 'up' | 'down'
  className = '',
  ...rest
}) {
  const cls = ['hc-stat', className].filter(Boolean).join(' ');
  const valCls = ['hc-stat__value', `hc-stat__value--${size}`, gradient ? 'hc-stat__value--gradient' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: valCls
  }, prefix, value, suffix, trend && /*#__PURE__*/React.createElement("span", {
    className: `hc-stat__trend hc-stat__trend--${trendDir || 'up'}`
  }, trendDir === 'down' ? '▼' : '▲', " ", trend)), label && /*#__PURE__*/React.createElement("div", {
    className: "hc-stat__label"
  }, label), caption && /*#__PURE__*/React.createElement("div", {
    className: "hc-stat__caption"
  }, caption));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-tag{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-sans); font-weight:var(--weight-medium); font-size:var(--text-sm);
  line-height:1; padding:7px 12px; border-radius:var(--radius-md);
  background:#fff; color:var(--text-secondary); border:1px solid var(--border-default);
}
.hc-tag__dot{ width:8px; height:8px; border-radius:2px; background:var(--color-brand); }
.hc-tag--active{ border-color:var(--color-brand); color:var(--color-brand-strong); background:var(--color-brand-soft); }
.hc-tag__x{ cursor:pointer; display:inline-flex; margin:-2px -4px -2px 0; padding:2px; border-radius:var(--radius-xs); color:var(--text-muted); background:none; border:none; }
.hc-tag__x:hover{ color:var(--text-primary); background:var(--gray-100); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-tag-css')) {
  const s = document.createElement('style');
  s.id = 'hc-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  active = false,
  dot = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  const cls = ['hc-tag', active ? 'hc-tag--active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "hc-tag__dot"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hc-tag__x",
    "aria-label": "Entfernen",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-alert{ display:flex; gap:12px; font-family:var(--font-sans); padding:14px 16px; border-radius:var(--radius-md);
  border:1px solid transparent; background:#fff; color:var(--text-primary); align-items:flex-start; }
.hc-alert__icon{ flex:none; margin-top:1px; display:flex; }
.hc-alert__body{ flex:1; min-width:0; }
.hc-alert__title{ font-weight:var(--weight-semibold); font-size:var(--text-base); line-height:1.3; }
.hc-alert__msg{ font-size:var(--text-sm); color:var(--text-secondary); margin-top:3px; line-height:var(--leading-snug); }
.hc-alert__close{ flex:none; background:none; border:none; cursor:pointer; color:var(--text-muted); padding:2px; border-radius:var(--radius-xs); display:flex; }
.hc-alert__close:hover{ color:var(--text-primary); background:rgba(0,0,0,.05); }
.hc-alert--info{ background:var(--color-info-bg); border-color:#BFD8FE; color:var(--blue-900); }
.hc-alert--info .hc-alert__icon{ color:var(--color-brand); }
.hc-alert--success{ background:var(--color-success-bg); border-color:#B6E3C4; }
.hc-alert--success .hc-alert__icon{ color:var(--color-success); }
.hc-alert--warning{ background:var(--color-warning-bg); border-color:#F0D49A; }
.hc-alert--warning .hc-alert__icon{ color:var(--color-warning); }
.hc-alert--danger{ background:var(--color-danger-bg); border-color:#F1B9B9; }
.hc-alert--danger .hc-alert__icon{ color:var(--color-danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-alert-css')) {
  const s = document.createElement('style');
  s.id = 'hc-alert-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-5M12 8h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
  })
};
function Alert({
  variant = 'info',
  title,
  onClose,
  className = '',
  children,
  ...rest
}) {
  const cls = ['hc-alert', `hc-alert--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "hc-alert__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[variant])), /*#__PURE__*/React.createElement("div", {
    className: "hc-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "hc-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "hc-alert__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hc-alert__close",
    "aria-label": "Schlie\xDFen",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-choice{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary); cursor:pointer; user-select:none; }
.hc-choice input{ position:absolute; opacity:0; width:0; height:0; }
.hc-choice__box{ flex:none; width:20px; height:20px; margin-top:1px; border:1.5px solid var(--border-strong); background:#fff;
  display:flex; align-items:center; justify-content:center; color:#fff;
  transition:background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out); }
.hc-choice--checkbox .hc-choice__box{ border-radius:var(--radius-xs); }
.hc-choice--radio .hc-choice__box{ border-radius:50%; }
.hc-choice__box svg{ opacity:0; transform:scale(.6); transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.hc-choice__dot{ width:8px; height:8px; border-radius:50%; background:#fff; opacity:0; transform:scale(.4); transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out); }
.hc-choice input:checked + .hc-choice__box{ background:var(--color-brand); border-color:var(--color-brand); }
.hc-choice input:checked + .hc-choice__box svg,
.hc-choice input:checked + .hc-choice__box .hc-choice__dot{ opacity:1; transform:scale(1); }
.hc-choice input:focus-visible + .hc-choice__box{ box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-choice input:disabled ~ *{ opacity:.5; }
.hc-choice__body{ display:flex; flex-direction:column; gap:2px; }
.hc-choice__desc{ font-size:var(--text-sm); color:var(--text-muted); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-choice-css')) {
  const s = document.createElement('style');
  s.id = 'hc-choice-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const CHECK = /*#__PURE__*/React.createElement("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
}));
function Checkbox({
  label,
  description,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hc-choice', 'hc-choice--checkbox', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__box"
  }, CHECK), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__body"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-field{ font-family:var(--font-sans); display:flex; flex-direction:column; gap:6px; }
.hc-field__label{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-primary); }
.hc-field__req{ color:var(--color-danger); margin-left:2px; }
.hc-field__wrap{ position:relative; display:flex; align-items:center; }
.hc-field__icon{ position:absolute; left:14px; display:flex; color:var(--text-muted); pointer-events:none; }
.hc-input{
  width:100%; box-sizing:border-box; font-family:inherit; font-size:var(--text-base); color:var(--text-primary);
  background:#fff; border:1px solid var(--border-default); border-radius:var(--radius-md);
  height:44px; padding:0 14px; transition:border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.hc-input--with-icon{ padding-left:42px; }
.hc-input::placeholder{ color:var(--gray-400); }
.hc-input:hover{ border-color:var(--border-strong); }
.hc-input:focus{ outline:none; border-color:var(--color-brand); box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-input:disabled{ background:var(--gray-50); color:var(--text-muted); cursor:not-allowed; }
.hc-field--error .hc-input{ border-color:var(--color-danger); }
.hc-field--error .hc-input:focus{ box-shadow:0 0 0 var(--ring-width) rgba(220,38,38,.28); }
.hc-field__hint{ font-size:var(--text-sm); color:var(--text-muted); }
.hc-field__hint--error{ color:var(--color-danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-field-css')) {
  const s = document.createElement('style');
  s.id = 'hc-field-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let uid = 0;
function Input({
  label,
  hint,
  error,
  required = false,
  leftIcon = null,
  id,
  className = '',
  ...rest
}) {
  const fid = id || `hc-input-${++uid}`;
  const fieldCls = ['hc-field', error ? 'hc-field--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: fieldCls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "hc-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "hc-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "hc-field__wrap"
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "hc-field__icon"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `hc-input${leftIcon ? ' hc-input--with-icon' : ''}`,
    "aria-invalid": !!error
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `hc-field__hint${error ? ' hc-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// shared .hc-choice styles

function Radio({
  label,
  description,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hc-choice', 'hc-choice--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__dot"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__body"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "hc-choice__desc"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// shared .hc-field label/hint styles

const CSS = `
.hc-select-wrap{ position:relative; display:flex; align-items:center; }
.hc-select{
  width:100%; box-sizing:border-box; font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary);
  background:#fff; border:1px solid var(--border-default); border-radius:var(--radius-md);
  height:44px; padding:0 40px 0 14px; appearance:none; -webkit-appearance:none; cursor:pointer;
  transition:border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.hc-select:hover{ border-color:var(--border-strong); }
.hc-select:focus{ outline:none; border-color:var(--color-brand); box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-select:disabled{ background:var(--gray-50); color:var(--text-muted); cursor:not-allowed; }
.hc-select__chev{ position:absolute; right:14px; pointer-events:none; color:var(--text-muted); display:flex; }
.hc-field--error .hc-select{ border-color:var(--color-danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-select-css')) {
  const s = document.createElement('style');
  s.id = 'hc-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let uid = 0;
function Select({
  label,
  hint,
  error,
  required = false,
  options,
  // optional [{value,label}] — or pass <option> children
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fid = id || `hc-select-${++uid}`;
  const fieldCls = ['hc-field', error ? 'hc-field--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: fieldCls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "hc-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "hc-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "hc-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "hc-select",
    "aria-invalid": !!error
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    className: "hc-select__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `hc-field__hint${error ? ' hc-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.hc-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary); cursor:pointer; user-select:none; }
.hc-switch input{ position:absolute; opacity:0; width:0; height:0; }
.hc-switch__track{ flex:none; width:44px; height:26px; border-radius:var(--radius-full); background:var(--gray-300);
  position:relative; transition:background var(--dur) var(--ease-out); }
.hc-switch__thumb{ position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%; background:#fff;
  box-shadow:var(--shadow-sm); transition:transform var(--dur) var(--ease-out); }
.hc-switch input:checked + .hc-switch__track{ background:var(--color-brand); }
.hc-switch input:checked + .hc-switch__track .hc-switch__thumb{ transform:translateX(18px); }
.hc-switch input:focus-visible + .hc-switch__track{ box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-switch input:disabled ~ *{ opacity:.5; }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-switch-css')) {
  const s = document.createElement('style');
  s.id = 'hc-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hc-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hc-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hc-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reuses the shared .hc-field / .hc-input styles injected by Input.jsx.

const CSS = `
.hc-textarea{
  width:100%; box-sizing:border-box; font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary);
  background:#fff; border:1px solid var(--border-default); border-radius:var(--radius-md);
  padding:12px 14px; min-height:112px; resize:vertical; line-height:var(--leading-normal);
  transition:border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.hc-textarea::placeholder{ color:var(--gray-400); }
.hc-textarea:hover{ border-color:var(--border-strong); }
.hc-textarea:focus{ outline:none; border-color:var(--color-brand); box-shadow:0 0 0 var(--ring-width) var(--focus-ring); }
.hc-textarea:disabled{ background:var(--gray-50); color:var(--text-muted); cursor:not-allowed; }
.hc-field--error .hc-textarea{ border-color:var(--color-danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('hc-textarea-css')) {
  const s = document.createElement('style');
  s.id = 'hc-textarea-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
let uid = 0;
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const fid = id || `hc-textarea-${++uid}`;
  const fieldCls = ['hc-field', error ? 'hc-field--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: fieldCls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "hc-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "hc-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "hc-textarea",
    "aria-invalid": !!error
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `hc-field__hint${error ? ' hc-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-app.jsx
try { (() => {
// Heckel Consulting — website chrome + app composition + interactivity.
const DSa = window.HeckelConsultingDesignSystem_50dcd5;
const {
  Button,
  Card,
  Badge,
  Input,
  Textarea,
  Select,
  Checkbox,
  Alert,
  Logo
} = DSa;
const {
  Hero,
  Trust,
  Services,
  Results,
  Process,
  Testimonial
} = window.HCSections;
const {
  IconArrow,
  IconPhone,
  IconCheck
} = window.HCIcons;
const MARKA = '../../assets/mark.png';
const NAV = [{
  id: 'leistungen',
  label: 'Leistungen'
}, {
  id: 'ergebnisse',
  label: 'Ergebnisse'
}, {
  id: 'ablauf',
  label: 'Ablauf'
}, {
  id: 'kontakt',
  label: 'Kontakt'
}];
function Header({
  onNav,
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.site-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    (el || window).addEventListener('scroll', onScroll);
    return () => (el || window).removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: 'header' + (scrolled ? ' header--scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#start",
    className: "header__logo",
    onClick: e => {
      e.preventDefault();
      onNav('start');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: "sm",
    markSrc: MARKA
  })), /*#__PURE__*/React.createElement("nav", {
    className: "header__nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "header__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "Erstgespr\xE4ch"))));
}
function Contact({
  formRef
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--muted",
    id: "kontakt",
    ref: formRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Kontakt"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Lassen Sie uns sprechen"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "30 Minuten, unverbindlich, per Video. Wir schauen gemeinsam, wo Ihr gr\xF6\xDFter Hebel liegt \u2014 ehrlich und ohne Verkaufsdruck."), /*#__PURE__*/React.createElement("ul", {
    className: "contact__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconCheck, {
    size: 18
  }), " Konkrete Einsch\xE4tzung Ihres Potenzials"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconCheck, {
    size: 18
  }), " Erste Handlungsempfehlungen"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconCheck, {
    size: 18
  }), " Klarer n\xE4chster Schritt")), /*#__PURE__*/React.createElement("a", {
    className: "contact__phone",
    href: "tel:+4915227625106"
  }, /*#__PURE__*/React.createElement(IconPhone, {
    size: 18
  }), " +49 152 27625106")), /*#__PURE__*/React.createElement(Card, {
    className: "contact__card",
    padding: "lg",
    elevation: "raised"
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Anfrage gesendet"
  }, "Danke! Wir melden uns innerhalb von 24 Stunden bei Ihnen.") : /*#__PURE__*/React.createElement("form", {
    className: "contact__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Vor- und Nachname",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Unternehmen",
    placeholder: "Firma"
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-Mail",
    type: "email",
    placeholder: "name@firma.de",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "0170 \u2026"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Anliegen",
    placeholder: "Bitte w\xE4hlen",
    options: [{
      value: 'kunden',
      label: 'Kundengewinnung'
    }, {
      value: 'recruiting',
      label: 'Recruiting'
    }, {
      value: 'analyse',
      label: 'KI-Marktanalyse'
    }, {
      value: 'sonstiges',
      label: 'Sonstiges'
    }]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Nachricht",
    placeholder: "Worum geht es?",
    rows: 3
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ich stimme der Verarbeitung meiner Daten zu.",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    fullWidth: true,
    rightIcon: /*#__PURE__*/React.createElement(IconArrow, null)
  }, "Anfrage senden")))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    size: "sm",
    tone: "light",
    markSrc: MARKA
  }), /*#__PURE__*/React.createElement("p", null, "Beratung f\xFCr planbares Wachstum \u2014 Kundengewinnung, Recruiting und KI-gest\xFCtztes Marketing.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "footer__h"
  }, "Navigation"), NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "footer__h"
  }, "Kontakt"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+4915227625106"
  }, "+49 152 27625106"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@heckel-consulting.de"
  }, "info@heckel-consulting.de"), /*#__PURE__*/React.createElement("span", {
    className: "footer__muted"
  }, "Neuburg an der Donau")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "footer__h"
  }, "Rechtliches"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Impressum"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Datenschutz"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "AGB")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, "\xA9 2026 Heckel Consulting \xB7 Michael Heckel")));
}
function App() {
  const scrollRef = React.useRef(null);
  const nav = id => {
    const root = scrollRef.current;
    const el = document.getElementById(id);
    if (root && el) root.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  const toContact = () => nav('kontakt');
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: nav,
    onCta: toContact
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-scroll",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement(Hero, {
    onCta: toContact
  }), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Heckel Consulting — website sections. Exposes components on window for site-app.jsx.
const DS = window.HeckelConsultingDesignSystem_50dcd5;
const {
  Button,
  Card,
  Badge,
  Tag,
  Stat,
  Logo
} = DS;
const MARK = '../../assets/mark.png';

// ---- tiny inline Lucide-style icon set ----
const Ico = (paths, extra) => props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props?.size || 20,
  height: props?.size || 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props), paths, extra);
const IconArrow = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 6l6 6-6 6"
})));
const IconTarget = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1"
})));
const IconUsers = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 21v-2a4 4 0 00-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 010 7.75"
})));
const IconChart = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 3v18h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 14l4-4 3 3 5-6"
})));
const IconSpark = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17l-1.9-5.1L4.5 10l5.6-1.4z"
})));
const IconCheck = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
})));
const IconPhone = Ico(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"
})));
window.HCIcons = {
  IconArrow,
  IconTarget,
  IconUsers,
  IconChart,
  IconSpark,
  IconCheck,
  IconPhone
};

// ---------------- HERO ----------------
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section hero",
    id: "start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Beratung f\xFCr planbares Wachstum"), /*#__PURE__*/React.createElement("h1", {
    className: "h1"
  }, "Planbar neue Kunden.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "Und Fachkr\xE4fte.")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Datengetriebene Kampagnen, klare Prozesse und ehrliche Beratung \u2014 gest\xFCtzt durch KI-basierte Marktanalysen. Kein Bauchgef\xFChl, sondern Zahlen, an denen wir uns messen lassen."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(IconArrow, null),
    onClick: onCta
  }, "Kostenloses Erstgespr\xE4ch"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "#leistungen"
  }, "Leistungen ansehen")), /*#__PURE__*/React.createElement("div", {
    className: "hero__proof"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "80 %"), /*#__PURE__*/React.createElement("span", null, "Zeitersparnis \xD8")), /*#__PURE__*/React.createElement("div", {
    className: "hero__sep"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "3,4\xD7"), /*#__PURE__*/React.createElement("span", null, "mehr Bewerbungen")), /*#__PURE__*/React.createElement("div", {
    className: "hero__sep"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "100 %"), /*#__PURE__*/React.createElement("span", null, "Zufriedenheitsgarantie")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__glow"
  }), /*#__PURE__*/React.createElement(Card, {
    className: "hero__panel",
    elevation: "raised",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__panel-top"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Badge, {
    color: "success",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    className: "hero__kpis"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1.284",
    label: "Neue Leads",
    trend: "+32%",
    trendDir: "up",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4,2\xD7",
    gradient: true,
    label: "ROAS",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__bars"
  }, [38, 52, 44, 66, 58, 80, 72].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: h + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__row"
  }, /*#__PURE__*/React.createElement(IconTarget, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "Kampagne \u201EFachkr\xE4fte Q3\" performt \xFCber Ziel"))))));
}

// ---------------- TRUST STRIP ----------------
function Trust() {
  const items = ['Handwerk', 'Pflege & Gesundheit', 'Gastronomie', 'Handel', 'Dienstleistung', 'Industrie'];
  return /*#__PURE__*/React.createElement("section", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap trust__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "trust__label"
  }, "Vertrauen von Betrieben aus"), /*#__PURE__*/React.createElement("div", {
    className: "trust__tags"
  }, items.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))));
}

// ---------------- SERVICES ----------------
function Services() {
  const {
    IconTarget,
    IconUsers,
    IconChart,
    IconSpark
  } = window.HCIcons;
  const data = [{
    icon: /*#__PURE__*/React.createElement(IconTarget, null),
    title: 'Kundengewinnung',
    text: 'Performance-Kampagnen auf Meta & Co., die planbar qualifizierte Anfragen liefern.'
  }, {
    icon: /*#__PURE__*/React.createElement(IconUsers, null),
    title: 'Recruiting',
    text: 'Unsere ganzheitliche Recruiting-Lösung bringt Ihnen Fachkräfte, die wirklich passen.'
  }, {
    icon: /*#__PURE__*/React.createElement(IconChart, null),
    title: 'KI-Marktanalyse',
    text: 'Datengetriebene Zielgruppen- und Wettbewerbsanalyse als Fundament jeder Strategie.'
  }, {
    icon: /*#__PURE__*/React.createElement(IconSpark, null),
    title: 'Content & Kreation',
    text: 'Maßgeschneiderte Inhalte, die Ihre Zielgruppe erreichen und überzeugen.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "leistungen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Leistungen"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "So arbeiten wir"), /*#__PURE__*/React.createElement("p", {
    className: "lead lead--center"
  }, "Vier Bausteine, ein Ziel: messbares Wachstum f\xFCr Ihr Unternehmen.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, data.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.title,
    interactive: true,
    padding: "lg",
    className: "svc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__icon"
  }, d.icon), /*#__PURE__*/React.createElement("h3", {
    className: "svc__title"
  }, d.title), /*#__PURE__*/React.createElement("p", {
    className: "svc__text"
  }, d.text))))));
}

// ---------------- RESULTS ----------------
function Results() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--ink",
    id: "ergebnisse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head sec-head--left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--light"
  }, "Ergebnisse"), /*#__PURE__*/React.createElement("h2", {
    className: "h2 h2--light"
  }, "Zahlen, die f\xFCr sich sprechen")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3 results__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "result"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "80",
    suffix: "%",
    gradient: true,
    label: "Zeitersparnis",
    caption: "im Recruiting-Prozess, \xD8 pro Partnerbetrieb"
  })), /*#__PURE__*/React.createElement("div", {
    className: "result"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "3,4",
    suffix: "\xD7",
    gradient: true,
    label: "Mehr Bewerbungen",
    caption: "innerhalb der ersten 90 Tage"
  })), /*#__PURE__*/React.createElement("div", {
    className: "result"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "100",
    suffix: "%",
    gradient: true,
    label: "Zufriedenheitsgarantie",
    caption: "in jedem Kundenvertrag enthalten"
  })))));
}

// ---------------- PROCESS ----------------
function Process() {
  const steps = [{
    n: '01',
    title: 'Analyse',
    text: 'Wir verstehen Ihr Angebot, Ihre Zielgruppe und Ihren Markt — datenbasiert.'
  }, {
    n: '02',
    title: 'Strategie',
    text: 'Wir entwickeln einen klaren Fahrplan mit messbaren Zielen.'
  }, {
    n: '03',
    title: 'Umsetzung',
    text: 'Kampagnen, Content und Prozesse — wir setzen um und optimieren laufend.'
  }, {
    n: '04',
    title: 'Skalierung',
    text: 'Was funktioniert, bauen wir aus. Transparent und planbar.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--muted",
    id: "ablauf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Ablauf"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "In vier Schritten zum Ergebnis")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step__n grad-text"
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    className: "step__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "step__text"
  }, s.text))))));
}

// ---------------- TESTIMONIAL ----------------
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: "lg",
    className: "quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote__mark"
  }, "\u201E"), /*#__PURE__*/React.createElement("blockquote", {
    className: "quote__text"
  }, "Endlich f\xFChren wir nur noch Gespr\xE4che mit Fachkr\xE4ften, die wirklich passen. Die Zeitersparnis ist enorm \u2014 und die Beratung ehrlich und auf Augenh\xF6he."), /*#__PURE__*/React.createElement("div", {
    className: "quote__who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, "MB"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Markus B."), /*#__PURE__*/React.createElement("span", null, "Gesch\xE4ftsf\xFChrer, Handwerksbetrieb"))))));
}
window.HCSections = {
  Hero,
  Trust,
  Services,
  Results,
  Process,
  Testimonial
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
