var ze = Object.defineProperty;
var He = (o, t, e) => t in o ? ze(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var _ = (o, t, e) => He(o, typeof t != "symbol" ? t + "" : t, e);
import { ref as p, onMounted as ae, watch as N, defineComponent as j, onUnmounted as ue, createElementBlock as y, openBlock as g, createElementVNode as n, normalizeClass as ee, Fragment as te, renderList as oe, createCommentVNode as F, toDisplayString as P, withModifiers as Me, withDirectives as k, withKeys as Te, vModelText as D, normalizeStyle as Ie, createVNode as ne, createBlock as Ue, unref as $, createTextVNode as Ae } from "vue";
const he = "https://paiban.tecmz.com/api/live_rich_editor";
async function Be() {
  var o;
  try {
    const t = await fetch(`${he}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: "{}"
    });
    if (!t.ok)
      throw new Error(`HTTP error! status: ${t.status}`);
    const e = await t.json();
    if (e.code !== 0 || !((o = e.data) != null && o.tree))
      throw new Error(e.msg || "Failed to fetch categories");
    return me(e.data.tree);
  } catch (t) {
    return console.error("Failed to fetch categories:", t), [];
  }
}
function me(o) {
  return o.map((t) => ({
    id: t.id,
    title: t.title,
    pid: t.pid,
    sort: t.sort || 0,
    _child: t._child ? me(t._child) : void 0
  }));
}
async function Re(o) {
  try {
    const t = {
      paginate: {
        page: (o == null ? void 0 : o.page) || 1,
        pageSize: (o == null ? void 0 : o.pageSize) || 100,
        search: {}
      }
    };
    o != null && o.categoryId && (t.paginate.search.categoryId = o.categoryId), o != null && o.keywords && (t.paginate.search.keywords = o.keywords);
    const e = await fetch(`${he}/paginate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    if (!e.ok)
      throw new Error(`HTTP error! status: ${e.status}`);
    const i = await e.json();
    if (i.code !== 0 || !i.data)
      throw new Error(i.msg || "Failed to fetch materials");
    return i.data;
  } catch (t) {
    return console.error("Failed to fetch materials:", t), {
      page: 1,
      pageSize: (o == null ? void 0 : o.pageSize) || 10,
      total: 0,
      records: []
    };
  }
}
function Fe(o) {
  return o.map((t) => ({
    ...t,
    id: t.id,
    title: t.title,
    html: t.html
  }));
}
async function Ne() {
  try {
    return await Be();
  } catch (o) {
    return console.error("Default category loader error:", o), [];
  }
}
async function Ve(o) {
  try {
    const t = await Re(o);
    return {
      records: Fe(t.records),
      total: t.total,
      page: t.page,
      pageSize: t.pageSize
    };
  } catch (t) {
    return console.error("Default style loader error:", t), {
      records: [],
      total: 0,
      page: 1,
      pageSize: (o == null ? void 0 : o.pageSize) || 100
    };
  }
}
const v = {
  /** Section样式类名 */
  SectionClass: "pb-section",
  /** Section激活状态类名 */
  SectionActiveClass: "pb-section-active",
  /** Section悬停状态类名 */
  SectionHoverClass: "pb-section-hover",
  /** 默认分类加载器 */
  DefaultCategoryLoader: Ne,
  /** 默认素材列表加载器 */
  DefaultStyleLoader: Ve
}, Pe = [
  [
    "source",
    "|",
    "undo",
    "redo",
    "|",
    "bold",
    "italic",
    "underline",
    "fontborder",
    "strikethrough",
    "superscript",
    "subscript",
    "removeformat",
    "formatmatch",
    "autotypeset",
    "blockquote",
    "pasteplain",
    "|",
    "forecolor",
    "backcolor",
    "insertorderedlist",
    "insertunorderedlist",
    "selectall",
    "cleardoc",
    "|",
    "rowspacingtop",
    "rowspacingbottom",
    "lineheight",
    "|",
    "customstyle",
    "paragraph",
    "fontfamily",
    "fontsize",
    "|",
    "directionalityltr",
    "directionalityrtl",
    "indent",
    "|",
    "justifyleft",
    "justifycenter",
    "justifyright",
    "justifyjustify",
    "|",
    "touppercase",
    "tolowercase",
    "|",
    "link",
    "unlink",
    "anchor",
    "|",
    "imagenone",
    "imageleft",
    "imageright",
    "imagecenter",
    "|",
    "insertimage",
    "emotion",
    "scrawl",
    "insertvideo",
    "attachment",
    "map",
    "insertframe",
    "insertcode",
    "pagebreak",
    "template",
    "background",
    "|",
    "horizontal",
    "date",
    "time",
    "spechars",
    "wordimage",
    "|",
    "inserttable",
    "deletetable",
    "insertparagraphbeforetable",
    "insertrow",
    "deleterow",
    "insertcol",
    "deletecol",
    "mergecells",
    "mergeright",
    "mergedown",
    "splittocells",
    "splittorows",
    "splittocols",
    "|",
    "print",
    "preview",
    "searchreplace",
    "shortcutmenu"
  ]
];
let V = !1, de = !1;
const ie = [];
function je(o = "/ueditor-plus") {
  return new Promise((t, e) => {
    if (de && window.UE) {
      t(window.UE);
      return;
    }
    if (V) {
      ie.push(() => t(window.UE));
      return;
    }
    V = !0;
    const i = o.endsWith("/") ? o : `${o}/`;
    window.UEDITOR_HOME_URL = i;
    const s = document.createElement("script");
    s.src = `${i}ueditor.config.js`, s.onload = () => {
      const l = document.createElement("script");
      l.src = `${i}ueditor.all.js`, l.onload = () => {
        de = !0, V = !1, ie.forEach((w) => w()), ie.length = 0, t(window.UE);
      }, l.onerror = () => {
        V = !1, e(new Error("Failed to load UEditor main script"));
      }, document.head.appendChild(l);
    }, s.onerror = () => {
      V = !1, e(new Error("Failed to load UEditor config script"));
    }, document.head.appendChild(s);
  });
}
const qe = `
/* Section基础样式 */
section.pb-section {
  position: relative;
  margin: 10px auto;
  padding: 0;
  transition: all 0.2s;
  cursor: pointer;
  min-height: 20px;
}

/* Section激活状态 */
section.pb-section.pb-section-active {
  outline: 2px dashed rgba(255, 0, 0, 0.4);
  outline-offset: 2px;
}

/* 子Section悬停状态 */
section.pb-section .pb-section-hover {
  outline: 1px dashed rgba(0, 0, 255, 0.3);
  outline-offset: 1px;
}

/* 子Section激活状态 */
section.pb-section .pb-section-active {
  outline: 1px dashed rgba(0, 0, 255, 0.5);
  outline-offset: 1px;
}

/* 子Section样式 */
section:not(.pb-section) {
  position: relative;
  transition: all 0.2s;
}

section:not(.pb-section).pb-section-hover {
  outline: 1px dashed rgba(0, 0, 255, 0.3);
  outline-offset: 1px;
}

/* 图片样式增强 */
section.pb-section img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: all 0.2s;
}

section.pb-section img:hover {
  opacity: 0.9;
  cursor: pointer;
}

/* 表格样式优化 */
section.pb-section table {
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
}

section.pb-section table td,
section.pb-section table th {
  border: 1px solid #ddd;
  padding: 8px;
}

section.pb-section table th {
  background: #f5f5f5;
  font-weight: bold;
}

/* 防止内容溢出 */
section.pb-section {
  overflow: hidden;
  word-wrap: break-word;
}

/* 空Section提示 */
section.pb-section:empty::before {
  content: '空内容块 - 点击编辑';
  color: #999;
  font-size: 14px;
}
`;
class Ke {
  constructor(t) {
    _(this, "config");
    _(this, "container", null);
    _(this, "editor", null);
    _(this, "editorId");
    _(this, "eventHandlers", /* @__PURE__ */ new Map());
    _(this, "resizeHandler", null);
    _(this, "editorElement", null);
    const e = t.ueditorConfig || {};
    e.iframeCssStylesAddition || (e.iframeCssStylesAddition = []), e.iframeCssStylesAddition = [
      qe,
      ...e.iframeCssStylesAddition
    ], e.toolbars || (e.toolbars = Pe), e.toolbars[e.toolbars.length - 1].push("liveeditor");
    let i = t.categoryLoader || v.DefaultCategoryLoader, s = t.styleLoader || v.DefaultStyleLoader;
    this.config = {
      container: t.container || "#editor",
      ueditorPath: t.ueditorPath || "/ueditor-plus",
      ueditorConfig: e,
      categoryLoader: i,
      styleLoader: s,
      onReady: t.onReady || (() => {
      }),
      onChange: t.onChange || (() => {
      })
    }, this.editorId = `ueditorPlusDesigner_${Date.now()}`;
  }
  /**
   * 初始化编辑器
   */
  async init() {
    if (typeof this.config.container == "string" ? this.container = document.querySelector(this.config.container) : this.container = this.config.container, !this.container)
      throw new Error("Container not found");
    await je(this.config.ueditorPath);
    const t = window.UE;
    if (!t)
      throw new Error("UEditor failed to load");
    const e = document.createElement("div");
    e.id = this.editorId, this.container.appendChild(e), this.editorElement = e;
    const i = {
      autoHeightEnabled: !1,
      initialFrameWidth: "100%",
      ...this.config.ueditorConfig
    };
    this.editor = t.getEditor(this.editorId, i), this.editorEvent(), Math.random() > 0.5 && (new window.Image().src = "https://open.modstart.com/license-logo.png?ueditor-plus-designer"), this.editor.ready(() => {
      this.setupResizeListener(), this.doLayout(), this.config.onReady(), this.emit("ready");
    }), this.editor.addListener("contentChange", () => {
      const s = this.getContent();
      this.config.onChange(s), this.emit("change", s);
    });
  }
  /**
   * 注册UI插件 - 必须在 UE.getEditor() 调用前执行
   */
  editorEvent() {
    this.editor.on("click", (t, e) => {
      const i = e.target, s = i.closest(`.${v.SectionClass}`);
      if (!s || (this.editor.document.querySelectorAll(`.${v.SectionClass}`).forEach((d) => {
        d.classList.remove(v.SectionActiveClass);
      }), s.classList.add(v.SectionActiveClass), this.editor.selection.getText()))
        return;
      let r = null;
      const a = this.editor.selection.getRange().getClosedNode();
      a && a.tagName && a.tagName.toLowerCase() === "img" && (r = a), this.emit("section-click", { section: s, element: i, image: r });
    }), this.editor.addListener("mouseover mouseout", (t, e) => {
      const i = e.target;
      if (this.editor.document.querySelectorAll(`section:not(.${v.SectionClass})`).forEach((l) => {
        l.classList.remove(v.SectionHoverClass);
      }), !i.classList.contains(v.SectionClass)) {
        const l = i.closest(`section:not(.${v.SectionClass})`);
        t === "mouseover" && l && l.classList.add(v.SectionHoverClass);
      }
    });
  }
  /**
   * 获取内容
   */
  getContent() {
    var t;
    return ((t = this.editor) == null ? void 0 : t.getContent()) || "";
  }
  /**
   * 设置内容
   */
  setContent(t) {
    var e;
    (e = this.editor) == null || e.setContent(t);
  }
  /**
   * 插入Section
   */
  insertSection(t, e) {
    if (!this.editor) return;
    const i = (e == null ? void 0 : e.id) || "", s = `<section class="${v.SectionClass} ${v.SectionActiveClass}" data-section-id="${i}">${t}</section>`;
    this.editor.execCommand("insertHtml", s);
  }
  /**
   * 布局调整 - 自适应高度
   */
  doLayout() {
    if (!this.container || !this.editor || !this.editorElement) return;
    const t = this.container.clientHeight, e = this.editorElement.querySelector(".edui-editor-toolbarbox"), i = e ? e.offsetHeight : 0, s = t - i;
    this.editor.setHeight(Math.max(s, 100));
  }
  /**
   * 设置resize监听器
   */
  setupResizeListener() {
    let t = null;
    this.resizeHandler = () => {
      t !== null && window.clearTimeout(t), t = window.setTimeout(() => {
        this.doLayout();
      }, 150);
    }, window.addEventListener("resize", this.resizeHandler);
  }
  /**
   * 销毁编辑器
   */
  destroy() {
    var t;
    this.resizeHandler && (window.removeEventListener("resize", this.resizeHandler), this.resizeHandler = null), (t = this.editor) == null || t.destroy(), this.editor = null, this.eventHandlers.clear();
  }
  /**
   * 事件监听
   */
  on(t, e) {
    this.eventHandlers.has(t) || this.eventHandlers.set(t, []), this.eventHandlers.get(t).push(e);
  }
  /**
   * 移除事件监听
   */
  off(t, e) {
    if (!e) {
      this.eventHandlers.delete(t);
      return;
    }
    const i = this.eventHandlers.get(t);
    if (i) {
      const s = i.indexOf(e);
      s > -1 && i.splice(s, 1);
    }
  }
  /**
   * 触发事件
   */
  emit(t, ...e) {
    const i = this.eventHandlers.get(t);
    i && i.forEach((s) => s(...e));
  }
  /**
   * 获取编辑器实例（UEditor原生实例）
   */
  getEditor() {
    return this.editor;
  }
}
function Oe(o) {
  const t = p([]), e = p([]), i = p(0), s = p(!1), l = p(!1), w = p(!1), r = p(0), a = p(""), d = p(1), c = p(100), m = p(!0), H = () => o.categoryLoader ? o.categoryLoader : v.DefaultCategoryLoader, U = () => o.styleLoader ? o.styleLoader : v.DefaultStyleLoader, A = async () => {
    const x = H();
    if (x) {
      w.value = !0;
      try {
        t.value = await x();
      } catch (f) {
        console.error("Failed to load categories:", f), t.value = [];
      } finally {
        w.value = !1;
      }
    }
  }, M = async (x, f = !1) => {
    const q = U();
    if (q) {
      f ? l.value = !0 : s.value = !0;
      try {
        const E = await q({
          categoryId: r.value,
          keywords: a.value,
          page: d.value,
          pageSize: c.value,
          ...x
        });
        f ? e.value = [...e.value, ...E.records] : e.value = E.records, i.value = E.total, c.value = E.pageSize;
        const G = Math.ceil(E.total / c.value);
        m.value = d.value < G;
      } catch (E) {
        console.error("Failed to load materials:", E), f || (e.value = [], i.value = 0, m.value = !1);
      } finally {
        f ? l.value = !1 : s.value = !1;
      }
    }
  }, W = async () => {
    l.value || !m.value || (d.value++, await M(void 0, !0));
  }, J = (x) => {
    r.value = x, d.value = 1, m.value = !0, M();
  }, Z = (x) => {
    a.value = x, d.value = 1, m.value = !0, M();
  };
  return ae(async () => {
    await A(), await M();
  }), {
    // Data
    categories: t,
    materials: e,
    total: i,
    // Loading states
    loading: s,
    loadingMore: l,
    loadingCategories: w,
    // Filter states
    currentCategory: r,
    keywords: a,
    currentPage: d,
    hasMore: m,
    // Methods
    loadMaterials: M,
    loadMore: W,
    changeCategory: J,
    search: Z
  };
}
const R = class R {
  constructor() {
    _(this, "element", null);
    _(this, "styles", {});
  }
  /**
   * 绑定DOM元素并解析样式
   */
  dom(t) {
    return this.element = t, this.parse(), this;
  }
  /**
   * 解析元素的style属性
   */
  parse() {
    if (this.styles = {}, !this.element) return this;
    const t = this.element.getAttribute("style");
    if (t) {
      const e = t.split(";");
      for (const i of e) {
        if (!i.trim()) continue;
        const [s, l] = i.split(":").map((w) => w.trim());
        s && l && (this.styles[s] = l);
      }
    }
    return this;
  }
  /**
   * 移除样式属性
   */
  remove(t) {
    return t in this.styles && delete this.styles[t], this;
  }
  /**
   * 移除DOM属性
   */
  removeDomAttr(t) {
    var e;
    return (e = this.element) == null || e.removeAttribute(t), this;
  }
  /**
   * 获取带前缀的样式键名
   */
  getStyleKeys(t) {
    const e = [];
    for (const i of R.prefixes) {
      const s = `${i}${t}`;
      if (s in this.styles) {
        e.push(s);
        break;
      }
    }
    return e.length ? e : [t];
  }
  /**
   * 设置样式值（支持回调处理）
   */
  setStyleValues(t, e) {
    const i = this.getStyleKeys(t);
    if (!i.length)
      this.styles[t] = e("");
    else
      for (const s of i) {
        const l = this.styles[s] || "";
        this.styles[s] = e(l);
      }
  }
  /**
   * 合并样式
   */
  merge(t, e) {
    if (t === "rotatez") {
      const i = `rotatez(${e}deg)`;
      this.setStyleValues("transform", (s) => /rotatez\(.*?\)/.test(s) ? s.replace(/rotatez\(.*?\)/, i) : s ? `${s} ${i}` : i);
    } else {
      this.styles[t] = String(e);
      for (const i of R.prefixes) {
        const s = `${i}${t}`;
        s in this.styles && (this.styles[s] = String(e));
      }
    }
    return this;
  }
  /**
   * 获取样式值
   */
  get(t, e = null) {
    if (!this.element) return e;
    switch (t) {
      case "opacity": {
        let i = this.element.style.opacity;
        if (!i)
          for (const s of R.prefixes) {
            const l = `${s}${t}`;
            if (l in this.styles) {
              i = this.styles[l];
              break;
            }
          }
        return i ? parseFloat(i) : e;
      }
      case "rotatez": {
        const i = this.element.style.transform || "";
        let s = 0;
        if (i.toLowerCase().indexOf("rotatez(") >= 0) {
          const l = i.toLowerCase().replace(/rotatex\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").replace(/rotatey\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").match(/rotatez\s*\(\s*([0-9\-]+)\s*deg\s*\)/);
          l && (s = parseInt(l[1]), s > 180 ? s -= 360 : s < -180 && (s += 360));
        }
        return s;
      }
      default:
        return this.styles[t] || e;
    }
  }
  /**
   * 将样式应用到DOM元素
   */
  toDom() {
    if (!this.element) return this;
    const t = [];
    for (const e in this.styles)
      t.push(`${e}:${this.styles[e]}`);
    return t.length ? this.element.setAttribute("style", t.join(";")) : this.element.removeAttribute("style"), this;
  }
};
// CSS前缀
_(R, "prefixes", ["-moz-", "-o-", "-webkit-", "-ms-"]);
let se = R;
const I = {
  /**
   * 从DOM元素创建处理器
   */
  fromDom(o) {
    return new se().dom(o);
  }
};
function We() {
  const o = p(null), t = p(null), e = p({
    id: "",
    width: 100,
    rotate: 0,
    opacity: 1
  }), i = p({
    show: !1,
    element: null,
    width: 100,
    opacity: 1
  }), s = (r) => {
    o.value = r, e.value.id = r.getAttribute("data-section-id") || "";
    const a = I.fromDom(r), d = r.style.width || "100%";
    e.value.width = parseInt(d) || 100, e.value.rotate = a.get("rotatez", 0), e.value.opacity = a.get("opacity", 1);
  }, l = (r, a) => {
    i.value.element = a, i.value.show = !0, o.value = r;
    const d = I.fromDom(a), c = a.style.width || "100%";
    i.value.width = parseInt(c) || 100, i.value.opacity = d.get("opacity", 1);
  }, w = () => {
    o.value = null, t.value = null, i.value.show = !1, i.value.element = null;
  };
  return N(() => e.value.width, (r) => {
    o.value && I.fromDom(o.value).merge("margin", "0 auto").merge("width", `${r}%`).toDom().remove("max-width").removeDomAttr("width");
  }), N(() => e.value.rotate, (r) => {
    o.value && I.fromDom(o.value).merge("rotatez", r).toDom();
  }), N(() => e.value.opacity, (r) => {
    o.value && I.fromDom(o.value).merge("opacity", r).toDom();
  }), N(() => i.value.width, (r) => {
    i.value.element && I.fromDom(i.value.element).remove("max-width").merge("width", `${r}%`).toDom().removeDomAttr("width");
  }), N(() => i.value.opacity, (r) => {
    i.value.element && I.fromDom(i.value.element).merge("opacity", r).toDom();
  }), {
    currentSection: o,
    currentElement: t,
    sectionData: e,
    imageData: i,
    prepareSectionStyle: s,
    prepareImageStyle: l,
    clearSelection: w
  };
}
function Je() {
  const o = (r, a) => {
    r && (r.undoManger.save(), a(), r.undoManger.save(), r.syncCommandState());
  };
  return {
    clearSectionFormat: (r, a) => {
      !r || !a || o(r, () => {
        r.selection.getRange().selectNode(a).select(), r.execCommand("removeformat"), a.className = `${v.SectionClass} ${v.SectionActiveClass}`;
      });
    },
    insertSection: (r, a, d) => {
      if (!r || !a) return;
      const c = document.createElement("section");
      c.className = v.SectionClass, c.setAttribute("data-section-id", "");
      const m = document.createElement("p"), H = document.createElement("br");
      m.appendChild(H), c.appendChild(m), o(r, () => {
        var U, A;
        d === "before" ? (U = a.parentNode) == null || U.insertBefore(c, a) : (A = a.parentNode) == null || A.insertBefore(c, a.nextSibling);
      }), r.selection.getRange().setStart(m, 0).setCursor(!1, !0);
    },
    selectSection: (r, a) => {
      !r || !a || o(r, () => {
        r.selection.getRange().selectNode(a).select();
      });
    },
    deleteSection: (r, a) => {
      !r || !a || o(r, () => {
        a.remove();
      });
    },
    moveSectionUp: (r, a) => {
      if (!r || !a) return;
      const d = a.previousElementSibling;
      d && o(r, () => {
        var c;
        (c = a.parentNode) == null || c.insertBefore(a, d);
      });
    },
    moveSectionDown: (r, a) => {
      if (!r || !a) return;
      const d = a.nextElementSibling;
      d && o(r, () => {
        var c;
        (c = a.parentNode) == null || c.insertBefore(a, d.nextSibling);
      });
    }
  };
}
const Ze = { class: "upd-material-panel" }, Ge = { class: "upd-material-body" }, Qe = { class: "upd-material-item" }, Xe = { class: "upd-material-item__head" }, Ye = { class: "upd-category" }, et = { class: "upd-category__item" }, tt = ["onClick"], ot = {
  key: 0,
  class: "upd-category__children"
}, it = ["onClick"], nt = { class: "upd-filter" }, st = { class: "upd-filter__search" }, at = { class: "upd-material-item__body" }, rt = {
  key: 0,
  class: "upd-loading"
}, lt = {
  key: 1,
  class: "upd-material-list"
}, ct = ["onClick"], dt = ["innerHTML"], ut = { class: "upd-material-list__info" }, ht = { class: "upd-material-list__title" }, mt = { class: "upd-material-list__id" }, pt = {
  key: 0,
  class: "upd-loading-more"
}, ft = {
  key: 1,
  class: "upd-no-more"
}, gt = /* @__PURE__ */ j({
  __name: "MaterialPanel",
  props: {
    categories: {},
    materials: {},
    total: {},
    currentCategory: {},
    loading: { type: Boolean, default: !1 },
    loadingMore: { type: Boolean, default: !1 },
    hasMore: { type: Boolean, default: !0 }
  },
  emits: ["select", "change-category", "search", "load-more"],
  setup(o, { emit: t }) {
    const e = o, i = t, s = p(""), l = p(null), w = () => {
      i("search", s.value);
    }, r = () => {
      if (!l.value || e.loading || e.loadingMore || !e.hasMore)
        return;
      const a = l.value, d = a.scrollTop, c = a.scrollHeight, m = a.clientHeight;
      d + m >= c - 50 && i("load-more");
    };
    return ae(() => {
      l.value = document.querySelector(".upd-material-item"), l.value && l.value.addEventListener("scroll", r);
    }), ue(() => {
      l.value && l.value.removeEventListener("scroll", r);
    }), (a, d) => (g(), y("div", Ze, [
      n("div", Ge, [
        n("div", Qe, [
          n("div", Xe, [
            n("div", Ye, [
              n("div", et, [
                n("div", {
                  class: ee(["upd-category__title", { "upd-category__title--active": o.currentCategory === 0 }]),
                  onClick: d[0] || (d[0] = (c) => a.$emit("change-category", 0))
                }, " 全部 ", 2)
              ]),
              (g(!0), y(te, null, oe(o.categories, (c) => (g(), y("div", {
                key: c.id,
                class: "upd-category__item"
              }, [
                n("div", {
                  class: ee(["upd-category__title", {
                    "upd-category__title--active": c.id === o.currentCategory || c._child && c._child.some((m) => m.id === o.currentCategory)
                  }]),
                  onClick: (m) => a.$emit("change-category", c.id)
                }, P(c.title), 11, tt),
                c._child && c._child.length ? (g(), y("div", ot, [
                  (g(!0), y(te, null, oe(c._child, (m) => (g(), y("div", {
                    key: m.id,
                    class: ee(["upd-category__child-title", { "upd-category__child-title--active": m.id === o.currentCategory }]),
                    onClick: Me((H) => a.$emit("change-category", m.id), ["stop"])
                  }, P(m.title), 11, it))), 128))
                ])) : F("", !0)
              ]))), 128))
            ]),
            n("div", nt, [
              d[2] || (d[2] = n("div", { class: "upd-filter__text" }, null, -1)),
              n("div", st, [
                k(n("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (c) => s.value = c),
                  type: "text",
                  placeholder: "样式ID或关键词",
                  onKeyup: Te(w, ["enter"])
                }, null, 544), [
                  [D, s.value]
                ])
              ])
            ])
          ]),
          n("div", at, [
            o.loading ? (g(), y("div", rt, " 加载中... ")) : (g(), y("div", lt, [
              (g(!0), y(te, null, oe(o.materials, (c) => (g(), y("div", {
                key: c.id,
                class: "upd-material-list__item",
                onClick: (m) => a.$emit("select", c)
              }, [
                n("div", {
                  class: "upd-material-list__preview",
                  innerHTML: c.html
                }, null, 8, dt),
                n("div", ut, [
                  n("span", ht, P(c.title), 1),
                  n("span", mt, "ID: " + P(c.id), 1)
                ])
              ], 8, ct))), 128)),
              o.loadingMore ? (g(), y("div", pt, " 加载更多... ")) : !o.hasMore && o.materials.length > 0 ? (g(), y("div", ft, " 没有更多数据了 ")) : F("", !0)
            ]))
          ])
        ])
      ])
    ]));
  }
}), O = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, vt = /* @__PURE__ */ O(gt, [["__scopeId", "data-v-797b48ca"]]), yt = ["width", "height", "stroke"], wt = /* @__PURE__ */ j({
  __name: "IconClose",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(o) {
    return (t, e) => (g(), y("svg", {
      width: o.size,
      height: o.size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: o.strokeColor,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "icon"
    }, [...e[0] || (e[0] = [
      n("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }, null, -1),
      n("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }, null, -1)
    ])], 8, yt));
  }
}), St = /* @__PURE__ */ O(wt, [["__scopeId", "data-v-218750c8"]]), bt = {
  key: 0,
  class: "upd-section-tools__panel"
}, Ct = { class: "upd-section-tools__body" }, _t = { class: "upd-section-tools__actions" }, $t = { class: "upd-section-tools__line" }, kt = { class: "upd-section-tools__field" }, Dt = { class: "upd-section-tools__line" }, xt = { class: "upd-section-tools__field" }, Et = { class: "upd-section-tools__panel" }, Lt = { class: "upd-section-tools__head" }, zt = { class: "upd-section-tools__desc" }, Ht = { class: "upd-section-tools__body" }, Mt = { class: "upd-section-tools__actions" }, Tt = { class: "upd-section-tools__line" }, It = { class: "upd-section-tools__field" }, Ut = { class: "upd-section-tools__line" }, At = { class: "upd-section-tools__field" }, Bt = { class: "upd-section-tools__line" }, Rt = { class: "upd-section-tools__field" }, Ft = /* @__PURE__ */ j({
  __name: "SectionTools",
  props: {
    sectionData: {},
    imageData: {},
    position: {}
  },
  emits: ["action", "image-action", "close"],
  setup(o) {
    return (t, e) => (g(), y("div", {
      class: "upd-section-tools",
      style: Ie({
        left: o.position.left + "px",
        top: o.position.top + "px"
      })
    }, [
      n("div", {
        class: "upd-section-tools__close",
        onClick: e[0] || (e[0] = (i) => t.$emit("close"))
      }, [
        ne(St, {
          size: 16,
          "stroke-color": "#fff"
        })
      ]),
      o.imageData.show ? (g(), y("div", bt, [
        e[21] || (e[21] = n("div", { class: "upd-section-tools__head" }, [
          n("span", { class: "upd-section-tools__title" }, "图片")
        ], -1)),
        n("div", Ct, [
          n("div", _t, [
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[1] || (e[1] = (i) => t.$emit("image-action", "change"))
            }, " 换图 ")
          ]),
          n("div", $t, [
            e[19] || (e[19] = n("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            n("div", kt, [
              k(n("input", {
                "onUpdate:modelValue": e[2] || (e[2] = (i) => o.imageData.width = i),
                type: "range",
                min: "0",
                max: "100",
                class: "upd-slider"
              }, null, 512), [
                [
                  D,
                  o.imageData.width,
                  void 0,
                  { number: !0 }
                ]
              ]),
              k(n("input", {
                "onUpdate:modelValue": e[3] || (e[3] = (i) => o.imageData.width = i),
                type: "number",
                min: "0",
                max: "100",
                class: "upd-input-number"
              }, null, 512), [
                [
                  D,
                  o.imageData.width,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          n("div", Dt, [
            e[20] || (e[20] = n("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            n("div", xt, [
              k(n("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (i) => o.imageData.opacity = i),
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-slider"
              }, null, 512), [
                [
                  D,
                  o.imageData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ]),
              k(n("input", {
                "onUpdate:modelValue": e[5] || (e[5] = (i) => o.imageData.opacity = i),
                type: "number",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-input-number"
              }, null, 512), [
                [
                  D,
                  o.imageData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ])
        ])
      ])) : F("", !0),
      n("div", Et, [
        n("div", Lt, [
          e[22] || (e[22] = n("span", { class: "upd-section-tools__title" }, "内容块", -1)),
          n("span", zt, " 样式ID " + P(o.sectionData.id || "-"), 1)
        ]),
        n("div", Ht, [
          n("div", Mt, [
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[6] || (e[6] = (i) => t.$emit("action", "clearFormat"))
            }, " 清除样式 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[7] || (e[7] = (i) => t.$emit("action", "newSectionBefore"))
            }, " 前空行 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[8] || (e[8] = (i) => t.$emit("action", "newSectionAfter"))
            }, " 后空行 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[9] || (e[9] = (i) => t.$emit("action", "select"))
            }, " 选中 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[10] || (e[10] = (i) => t.$emit("action", "delete"))
            }, " 删除 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[11] || (e[11] = (i) => t.$emit("action", "moveUp"))
            }, " 上移 "),
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[12] || (e[12] = (i) => t.$emit("action", "moveDown"))
            }, " 下移 ")
          ]),
          n("div", Tt, [
            e[23] || (e[23] = n("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            n("div", It, [
              k(n("input", {
                "onUpdate:modelValue": e[13] || (e[13] = (i) => o.sectionData.width = i),
                type: "range",
                min: "0",
                max: "100",
                class: "upd-slider"
              }, null, 512), [
                [
                  D,
                  o.sectionData.width,
                  void 0,
                  { number: !0 }
                ]
              ]),
              k(n("input", {
                "onUpdate:modelValue": e[14] || (e[14] = (i) => o.sectionData.width = i),
                type: "number",
                min: "0",
                max: "100",
                class: "upd-input-number"
              }, null, 512), [
                [
                  D,
                  o.sectionData.width,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          n("div", Ut, [
            e[24] || (e[24] = n("div", { class: "upd-section-tools__label" }, "旋转角度", -1)),
            n("div", At, [
              k(n("input", {
                "onUpdate:modelValue": e[15] || (e[15] = (i) => o.sectionData.rotate = i),
                type: "range",
                min: "-180",
                max: "180",
                class: "upd-slider"
              }, null, 512), [
                [
                  D,
                  o.sectionData.rotate,
                  void 0,
                  { number: !0 }
                ]
              ]),
              k(n("input", {
                "onUpdate:modelValue": e[16] || (e[16] = (i) => o.sectionData.rotate = i),
                type: "number",
                min: "-180",
                max: "180",
                class: "upd-input-number"
              }, null, 512), [
                [
                  D,
                  o.sectionData.rotate,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          n("div", Bt, [
            e[25] || (e[25] = n("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            n("div", Rt, [
              k(n("input", {
                "onUpdate:modelValue": e[17] || (e[17] = (i) => o.sectionData.opacity = i),
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-slider"
              }, null, 512), [
                [
                  D,
                  o.sectionData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ]),
              k(n("input", {
                "onUpdate:modelValue": e[18] || (e[18] = (i) => o.sectionData.opacity = i),
                type: "number",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-input-number"
              }, null, 512), [
                [
                  D,
                  o.sectionData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ])
        ])
      ])
    ], 4));
  }
}), Nt = /* @__PURE__ */ O(Ft, [["__scopeId", "data-v-f465a212"]]), Vt = ["width", "height", "stroke"], Pt = /* @__PURE__ */ j({
  __name: "IconCheck",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(o) {
    return (t, e) => (g(), y("svg", {
      width: o.size,
      height: o.size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: o.strokeColor,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "icon"
    }, [...e[0] || (e[0] = [
      n("polyline", { points: "20 6 9 17 4 12" }, null, -1)
    ])], 8, Vt));
  }
}), jt = /* @__PURE__ */ O(Pt, [["__scopeId", "data-v-0ae058a4"]]), qt = { class: "ueditor-plus-designer" }, Kt = { class: "ueditor-plus-designer__body" }, Ot = {
  key: 0,
  class: "ueditor-plus-designer__material"
}, Wt = { class: "ueditor-plus-designer__editor" }, Jt = { class: "upd-editor-instance" }, Zt = ["id"], Gt = {
  key: 0,
  class: "upd-toolbar"
}, to = /* @__PURE__ */ j({
  __name: "Designer",
  props: {
    config: { default: () => ({}) },
    isIframe: { type: Boolean, default: !1 }
  },
  emits: ["ready", "change", "confirm"],
  setup(o, { expose: t, emit: e }) {
    const i = o, s = e, l = p(null), w = p(`upd_${Date.now()}`), r = p(!0), a = p(!1), d = p({ left: 0, top: 0 }), {
      categories: c,
      materials: m,
      total: H,
      loading: U,
      loadingMore: A,
      currentCategory: M,
      hasMore: W,
      changeCategory: J,
      search: Z,
      loadMore: x
    } = Oe(i.config), {
      currentSection: f,
      sectionData: q,
      imageData: E,
      prepareSectionStyle: G,
      prepareImageStyle: pe,
      clearSelection: fe
    } = We(), {
      clearSectionFormat: ge,
      insertSection: re,
      selectSection: ve,
      deleteSection: ye,
      moveSectionUp: we,
      moveSectionDown: Se
    } = Je();
    ae(async () => {
      const u = document.getElementById(w.value);
      if (u) {
        l.value = new Ke({
          ...i.config,
          container: u
        });
        try {
          await l.value.init(), l.value.on("ready", () => {
            s("ready"), Q();
          }), l.value.on("change", (h) => {
            s("change", h);
          }), l.value.on("section-click", _e), window.addEventListener("resize", Q);
        } catch (h) {
          console.error("Failed to initialize designer:", h);
        }
      }
    }), ue(() => {
      var u;
      window.removeEventListener("resize", Q), (u = l.value) == null || u.destroy();
    });
    const be = (u) => {
      l.value && l.value.insertSection(u.html, { id: u.id });
    }, Ce = (u) => {
      Z(u);
    }, _e = ({ section: u, element: h, image: z }) => {
      f.value = u, G(u), z ? pe(u, z) : E.value.show = !1, a.value = !0, le(u);
    }, le = (u) => {
      if (!l.value) return;
      const h = l.value.getEditor();
      if (!h) return;
      const z = document.querySelector(`#${w.value}`);
      if (!z) return;
      const B = z.querySelector(".edui-editor-iframeholder > iframe");
      if (!B) return;
      const K = h.document, S = $e(u, B, K), C = 320, b = 350, Ee = B.getBoundingClientRect(), X = document.querySelector(".ueditor-plus-designer"), ce = X == null ? void 0 : X.getBoundingClientRect();
      if (!ce) return;
      let Y = Ee.left - ce.left - C;
      Y = Math.max(0, Y);
      let T;
      if (S.spaceTop > S.spaceBottom && S.spaceTop > b)
        T = S.top - b - S.relativeTop, T = Math.max(0, T);
      else {
        T = S.top + S.height - S.relativeTop;
        const Le = S.top + S.height + S.spaceBottom - S.relativeTop - b;
        T = Math.min(T, Le);
      }
      d.value = {
        left: Y,
        top: T
      };
    }, $e = (u, h, z) => {
      const B = document.querySelector(".ueditor-plus-designer");
      if (!B)
        return {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          containerWidth: 0,
          containerHeight: 0,
          spaceTop: 0,
          spaceBottom: 0,
          spaceLeft: 0,
          spaceRight: 0,
          relativeLeft: 0,
          relativeTop: 0
        };
      const K = h.getBoundingClientRect(), S = u.getBoundingClientRect(), C = B.getBoundingClientRect(), b = {
        left: K.left + S.left - z.documentElement.scrollLeft,
        top: K.top + S.top - z.documentElement.scrollTop,
        width: S.width,
        height: S.height,
        containerWidth: C.width,
        containerHeight: C.height,
        spaceTop: 0,
        spaceBottom: 0,
        spaceLeft: 0,
        spaceRight: 0,
        relativeLeft: C.left,
        relativeTop: C.top
      };
      return b.spaceTop = b.top - C.top, b.spaceLeft = b.left - C.left, b.spaceBottom = C.top + C.height - (b.top + b.height), b.spaceRight = C.left + C.width - (b.left + b.width), b;
    }, Q = () => {
      a.value && f.value && le(f.value);
    }, L = () => {
      f.value && f.value.classList.remove(v.SectionActiveClass), a.value = !1, fe();
    }, ke = (u) => {
      if (!l.value || !f.value) return;
      const h = l.value.getEditor();
      if (h)
        switch (u) {
          case "clearFormat":
            ge(h, f.value), L();
            break;
          case "newSectionBefore":
            re(h, f.value, "before"), L();
            break;
          case "newSectionAfter":
            re(h, f.value, "after"), L();
            break;
          case "select":
            ve(h, f.value), L();
            break;
          case "delete":
            ye(h, f.value), L();
            break;
          case "moveUp":
            we(h, f.value), L();
            break;
          case "moveDown":
            Se(h, f.value), L();
            break;
        }
    }, De = (u) => {
      console.log("Image action:", u);
    }, xe = () => {
      if (l.value) {
        const u = l.value.getContent();
        s("confirm", u);
      }
    };
    return t({
      getContent: () => {
        var u;
        return ((u = l.value) == null ? void 0 : u.getContent()) || "";
      },
      setContent: (u) => {
        var h;
        (h = l.value) == null || h.setContent(u);
      }
    }), (u, h) => (g(), y("div", qt, [
      n("div", Kt, [
        r.value ? (g(), y("div", Ot, [
          ne(vt, {
            categories: $(c),
            materials: $(m),
            total: $(H),
            "current-category": $(M),
            loading: $(U),
            "loading-more": $(A),
            "has-more": $(W),
            onSelect: be,
            onChangeCategory: $(J),
            onSearch: Ce,
            onLoadMore: $(x)
          }, null, 8, ["categories", "materials", "total", "current-category", "loading", "loading-more", "has-more", "onChangeCategory", "onLoadMore"])
        ])) : F("", !0),
        n("div", Wt, [
          n("div", Jt, [
            n("div", {
              id: w.value,
              style: { height: "100%" }
            }, null, 8, Zt)
          ]),
          o.isIframe ? (g(), y("div", Gt, [
            n("a", {
              class: "upd-toolbar__item",
              href: "javascript:;",
              onClick: xe
            }, [
              ne(jt, { size: 16 }),
              h[0] || (h[0] = Ae(" 完成 ", -1))
            ])
          ])) : F("", !0)
        ])
      ]),
      a.value ? (g(), Ue(Nt, {
        key: 0,
        "section-data": $(q),
        "image-data": $(E),
        position: d.value,
        onAction: ke,
        onImageAction: De,
        onClose: L
      }, null, 8, ["section-data", "image-data", "position"])) : F("", !0)
    ]));
  }
});
export {
  jt as IconCheck,
  St as IconClose,
  vt as MaterialPanel,
  Nt as SectionTools,
  to as UEditorPlusDesigner,
  to as default,
  Oe as useMaterial,
  We as useSection
};
