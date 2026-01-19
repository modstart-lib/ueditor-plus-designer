var Ee = Object.defineProperty;
var xe = (o, t, e) => t in o ? Ee(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var _ = (o, t, e) => xe(o, typeof t != "symbol" ? t + "" : t, e);
import { ref as f, onMounted as se, watch as P, defineComponent as j, onUnmounted as ce, createElementBlock as S, openBlock as y, createElementVNode as n, normalizeClass as Y, Fragment as ee, renderList as te, createCommentVNode as R, toDisplayString as V, withModifiers as Le, withDirectives as k, withKeys as ze, vModelText as D, normalizeStyle as Ie, createVNode as ie, createBlock as Ue, unref as $, createTextVNode as He } from "vue";
const de = "https://paiban.tecmz.com/api/live_rich_editor";
async function Me() {
  var o;
  try {
    const t = await fetch(`${de}/categories`, {
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
    return ue(e.data.tree);
  } catch (t) {
    return console.error("Failed to fetch categories:", t), [];
  }
}
function ue(o) {
  return o.map((t) => ({
    id: t.id,
    title: t.title,
    pid: t.pid,
    sort: t.sort || 0,
    _child: t._child ? ue(t._child) : void 0
  }));
}
async function Te(o) {
  try {
    const t = {
      paginate: {
        page: (o == null ? void 0 : o.page) || 1,
        pageSize: (o == null ? void 0 : o.pageSize) || 100,
        search: {}
      }
    };
    o != null && o.categoryId && (t.paginate.search.categoryId = o.categoryId), o != null && o.keywords && (t.paginate.search.keywords = o.keywords);
    const e = await fetch(`${de}/paginate`, {
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
function Ae(o) {
  return o.map((t) => ({
    ...t,
    id: t.id,
    title: t.title,
    html: t.html
  }));
}
async function Be() {
  try {
    return await Me();
  } catch (o) {
    return console.error("Default category loader error:", o), [];
  }
}
async function Re(o) {
  try {
    const t = await Te(o);
    return {
      records: Ae(t.records),
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
const w = {
  /** Section样式类名 */
  SectionClass: "pb-section",
  /** Section激活状态类名 */
  SectionActiveClass: "pb-section-active",
  /** Section悬停状态类名 */
  SectionHoverClass: "pb-section-hover",
  /** 默认分类加载器 */
  DefaultCategoryLoader: Be,
  /** 默认素材列表加载器 */
  DefaultStyleLoader: Re
}, Ne = [
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
let F = !1, re = !1;
const oe = [];
function Pe(o = "/ueditor-plus") {
  return new Promise((t, e) => {
    if (re && window.UE) {
      t(window.UE);
      return;
    }
    if (F) {
      oe.push(() => t(window.UE));
      return;
    }
    F = !0;
    const i = o.endsWith("/") ? o : `${o}/`;
    window.UEDITOR_HOME_URL = i;
    const s = document.createElement("script");
    s.src = `${i}ueditor.config.js`, s.onload = () => {
      const r = document.createElement("script");
      r.src = `${i}ueditor.all.js`, r.onload = () => {
        re = !0, F = !1, oe.forEach((p) => p()), oe.length = 0, t(window.UE);
      }, r.onerror = () => {
        F = !1, e(new Error("Failed to load UEditor main script"));
      }, document.head.appendChild(r);
    }, s.onerror = () => {
      F = !1, e(new Error("Failed to load UEditor config script"));
    }, document.head.appendChild(s);
  });
}
const Fe = `
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
class Ve {
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
      Fe,
      ...e.iframeCssStylesAddition
    ], e.toolbars || (e.toolbars = Ne), e.toolbars[e.toolbars.length - 1].push("liveeditor");
    let i = t.categoryLoader || w.DefaultCategoryLoader, s = t.styleLoader || w.DefaultStyleLoader;
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
    await Pe(this.config.ueditorPath);
    const t = window.UE;
    if (!t)
      throw new Error("UEditor failed to load");
    const e = document.createElement("div");
    e.id = this.editorId, this.container.appendChild(e), this.editorElement = e, this.registerUIPlugin();
    const i = {
      autoHeightEnabled: !1,
      initialFrameWidth: "100%",
      ...this.config.ueditorConfig
    };
    this.editor = t.getEditor(this.editorId, i), this.editor.ready(() => {
      this.setupResizeListener(), this.doLayout(), this.config.onReady(), this.emit("ready");
    }), this.editor.addListener("contentChange", () => {
      const s = this.getContent();
      this.config.onChange(s), this.emit("change", s);
    });
  }
  /**
   * 注册UI插件 - 必须在 UE.getEditor() 调用前执行
   */
  registerUIPlugin() {
    window.UE.registerUI("liveeditor", (e, i) => {
      e.on("click", (s, r) => {
        const p = r.target, l = p.closest(`.${w.SectionClass}`);
        if (!l || (e.document.querySelectorAll(`.${w.SectionClass}`).forEach((L) => {
          L.classList.remove(w.SectionActiveClass);
        }), l.classList.add(w.SectionActiveClass), e.selection.getText()))
          return;
        let c = null;
        const h = e.selection.getRange().getClosedNode();
        h && h.tagName && h.tagName.toLowerCase() === "img" && (c = h), this.emit("section-click", { section: l, element: p, image: c });
      }), e.addListener("mouseover mouseout", (s, r) => {
        const p = r.target;
        if (e.document.querySelectorAll(`section:not(.${w.SectionClass})`).forEach((a) => {
          a.classList.remove(w.SectionHoverClass);
        }), !p.classList.contains(w.SectionClass)) {
          const a = p.closest(`section:not(.${w.SectionClass})`);
          s === "mouseover" && a && a.classList.add(w.SectionHoverClass);
        }
      });
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
    const i = (e == null ? void 0 : e.id) || "", s = `<section class="${w.SectionClass} ${w.SectionActiveClass}" data-section-id="${i}">${t}</section>`;
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
function je(o) {
  const t = f([]), e = f([]), i = f(0), s = f(!1), r = f(!1), p = f(!1), l = f(0), a = f(""), d = f(1), c = f(100), h = f(!0), L = () => o.categoryLoader ? o.categoryLoader : w.DefaultCategoryLoader, T = () => o.styleLoader ? o.styleLoader : w.DefaultStyleLoader, A = async () => {
    const E = L();
    if (E) {
      p.value = !0;
      try {
        t.value = await E();
      } catch (v) {
        console.error("Failed to load categories:", v), t.value = [];
      } finally {
        p.value = !1;
      }
    }
  }, U = async (E, v = !1) => {
    const q = T();
    if (q) {
      v ? r.value = !0 : s.value = !0;
      try {
        const x = await q({
          categoryId: l.value,
          keywords: a.value,
          page: d.value,
          pageSize: c.value,
          ...E
        });
        v ? e.value = [...e.value, ...x.records] : e.value = x.records, i.value = x.total, c.value = x.pageSize;
        const G = Math.ceil(x.total / c.value);
        h.value = d.value < G;
      } catch (x) {
        console.error("Failed to load materials:", x), v || (e.value = [], i.value = 0, h.value = !1);
      } finally {
        v ? r.value = !1 : s.value = !1;
      }
    }
  }, W = async () => {
    r.value || !h.value || (d.value++, await U(void 0, !0));
  }, J = (E) => {
    l.value = E, d.value = 1, h.value = !0, U();
  }, Z = (E) => {
    a.value = E, d.value = 1, h.value = !0, U();
  };
  return se(async () => {
    await A(), await U();
  }), {
    // Data
    categories: t,
    materials: e,
    total: i,
    // Loading states
    loading: s,
    loadingMore: r,
    loadingCategories: p,
    // Filter states
    currentCategory: l,
    keywords: a,
    currentPage: d,
    hasMore: h,
    // Methods
    loadMaterials: U,
    loadMore: W,
    changeCategory: J,
    search: Z
  };
}
const B = class B {
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
        const [s, r] = i.split(":").map((p) => p.trim());
        s && r && (this.styles[s] = r);
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
    for (const i of B.prefixes) {
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
        const r = this.styles[s] || "";
        this.styles[s] = e(r);
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
      for (const i of B.prefixes) {
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
          for (const s of B.prefixes) {
            const r = `${s}${t}`;
            if (r in this.styles) {
              i = this.styles[r];
              break;
            }
          }
        return i ? parseFloat(i) : e;
      }
      case "rotatez": {
        const i = this.element.style.transform || "";
        let s = 0;
        if (i.toLowerCase().indexOf("rotatez(") >= 0) {
          const r = i.toLowerCase().replace(/rotatex\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").replace(/rotatey\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").match(/rotatez\s*\(\s*([0-9\-]+)\s*deg\s*\)/);
          r && (s = parseInt(r[1]), s > 180 ? s -= 360 : s < -180 && (s += 360));
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
_(B, "prefixes", ["-moz-", "-o-", "-webkit-", "-ms-"]);
let ne = B;
const M = {
  /**
   * 从DOM元素创建处理器
   */
  fromDom(o) {
    return new ne().dom(o);
  }
};
function qe() {
  const o = f(null), t = f(null), e = f({
    id: "",
    width: 100,
    rotate: 0,
    opacity: 1
  }), i = f({
    show: !1,
    element: null,
    width: 100,
    opacity: 1
  }), s = (l) => {
    o.value = l, e.value.id = l.getAttribute("data-section-id") || "";
    const a = M.fromDom(l), d = l.style.width || "100%";
    e.value.width = parseInt(d) || 100, e.value.rotate = a.get("rotatez", 0), e.value.opacity = a.get("opacity", 1);
  }, r = (l, a) => {
    i.value.element = a, i.value.show = !0, o.value = l;
    const d = M.fromDom(a), c = a.style.width || "100%";
    i.value.width = parseInt(c) || 100, i.value.opacity = d.get("opacity", 1);
  }, p = () => {
    o.value = null, t.value = null, i.value.show = !1, i.value.element = null;
  };
  return P(() => e.value.width, (l) => {
    o.value && M.fromDom(o.value).merge("margin", "0 auto").merge("width", `${l}%`).toDom().remove("max-width").removeDomAttr("width");
  }), P(() => e.value.rotate, (l) => {
    o.value && M.fromDom(o.value).merge("rotatez", l).toDom();
  }), P(() => e.value.opacity, (l) => {
    o.value && M.fromDom(o.value).merge("opacity", l).toDom();
  }), P(() => i.value.width, (l) => {
    i.value.element && M.fromDom(i.value.element).remove("max-width").merge("width", `${l}%`).toDom().removeDomAttr("width");
  }), P(() => i.value.opacity, (l) => {
    i.value.element && M.fromDom(i.value.element).merge("opacity", l).toDom();
  }), {
    currentSection: o,
    currentElement: t,
    sectionData: e,
    imageData: i,
    prepareSectionStyle: s,
    prepareImageStyle: r,
    clearSelection: p
  };
}
function Ke() {
  const o = (l, a) => {
    l && (l.undoManger.save(), a(), l.undoManger.save(), l.syncCommandState());
  };
  return {
    clearSectionFormat: (l, a) => {
      !l || !a || o(l, () => {
        l.selection.getRange().selectNode(a).select(), l.execCommand("removeformat"), a.className = `${w.SectionClass} ${w.SectionActiveClass}`;
      });
    },
    insertSection: (l, a, d) => {
      if (!l || !a) return;
      const c = document.createElement("section");
      c.className = w.SectionClass, c.setAttribute("data-section-id", "");
      const h = document.createElement("p"), L = document.createElement("br");
      h.appendChild(L), c.appendChild(h), o(l, () => {
        var T, A;
        d === "before" ? (T = a.parentNode) == null || T.insertBefore(c, a) : (A = a.parentNode) == null || A.insertBefore(c, a.nextSibling);
      }), l.selection.getRange().setStart(h, 0).setCursor(!1, !0);
    },
    selectSection: (l, a) => {
      !l || !a || o(l, () => {
        l.selection.getRange().selectNode(a).select();
      });
    },
    deleteSection: (l, a) => {
      !l || !a || o(l, () => {
        a.remove();
      });
    },
    moveSectionUp: (l, a) => {
      if (!l || !a) return;
      const d = a.previousElementSibling;
      d && o(l, () => {
        var c;
        (c = a.parentNode) == null || c.insertBefore(a, d);
      });
    },
    moveSectionDown: (l, a) => {
      if (!l || !a) return;
      const d = a.nextElementSibling;
      d && o(l, () => {
        var c;
        (c = a.parentNode) == null || c.insertBefore(a, d.nextSibling);
      });
    }
  };
}
const Oe = { class: "upd-material-panel" }, We = { class: "upd-material-body" }, Je = { class: "upd-material-item" }, Ze = { class: "upd-material-item__head" }, Ge = { class: "upd-category" }, Qe = { class: "upd-category__item" }, Xe = ["onClick"], Ye = {
  key: 0,
  class: "upd-category__children"
}, et = ["onClick"], tt = { class: "upd-filter" }, ot = { class: "upd-filter__search" }, it = { class: "upd-material-item__body" }, nt = {
  key: 0,
  class: "upd-loading"
}, st = {
  key: 1,
  class: "upd-material-list"
}, at = ["onClick"], lt = ["innerHTML"], rt = { class: "upd-material-list__info" }, ct = { class: "upd-material-list__title" }, dt = { class: "upd-material-list__id" }, ut = {
  key: 0,
  class: "upd-loading-more"
}, ht = {
  key: 1,
  class: "upd-no-more"
}, mt = /* @__PURE__ */ j({
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
    const e = o, i = t, s = f(""), r = f(null), p = () => {
      i("search", s.value);
    }, l = () => {
      if (!r.value || e.loading || e.loadingMore || !e.hasMore)
        return;
      const a = r.value, d = a.scrollTop, c = a.scrollHeight, h = a.clientHeight;
      d + h >= c - 50 && i("load-more");
    };
    return se(() => {
      r.value = document.querySelector(".upd-material-item"), r.value && r.value.addEventListener("scroll", l);
    }), ce(() => {
      r.value && r.value.removeEventListener("scroll", l);
    }), (a, d) => (y(), S("div", Oe, [
      n("div", We, [
        n("div", Je, [
          n("div", Ze, [
            n("div", Ge, [
              n("div", Qe, [
                n("div", {
                  class: Y(["upd-category__title", { "upd-category__title--active": o.currentCategory === 0 }]),
                  onClick: d[0] || (d[0] = (c) => a.$emit("change-category", 0))
                }, " 全部 ", 2)
              ]),
              (y(!0), S(ee, null, te(o.categories, (c) => (y(), S("div", {
                key: c.id,
                class: "upd-category__item"
              }, [
                n("div", {
                  class: Y(["upd-category__title", {
                    "upd-category__title--active": c.id === o.currentCategory || c._child && c._child.some((h) => h.id === o.currentCategory)
                  }]),
                  onClick: (h) => a.$emit("change-category", c.id)
                }, V(c.title), 11, Xe),
                c._child && c._child.length ? (y(), S("div", Ye, [
                  (y(!0), S(ee, null, te(c._child, (h) => (y(), S("div", {
                    key: h.id,
                    class: Y(["upd-category__child-title", { "upd-category__child-title--active": h.id === o.currentCategory }]),
                    onClick: Le((L) => a.$emit("change-category", h.id), ["stop"])
                  }, V(h.title), 11, et))), 128))
                ])) : R("", !0)
              ]))), 128))
            ]),
            n("div", tt, [
              d[2] || (d[2] = n("div", { class: "upd-filter__text" }, null, -1)),
              n("div", ot, [
                k(n("input", {
                  "onUpdate:modelValue": d[1] || (d[1] = (c) => s.value = c),
                  type: "text",
                  placeholder: "样式ID或关键词",
                  onKeyup: ze(p, ["enter"])
                }, null, 544), [
                  [D, s.value]
                ])
              ])
            ])
          ]),
          n("div", it, [
            o.loading ? (y(), S("div", nt, " 加载中... ")) : (y(), S("div", st, [
              (y(!0), S(ee, null, te(o.materials, (c) => (y(), S("div", {
                key: c.id,
                class: "upd-material-list__item",
                onClick: (h) => a.$emit("select", c)
              }, [
                n("div", {
                  class: "upd-material-list__preview",
                  innerHTML: c.html
                }, null, 8, lt),
                n("div", rt, [
                  n("span", ct, V(c.title), 1),
                  n("span", dt, "ID: " + V(c.id), 1)
                ])
              ], 8, at))), 128)),
              o.loadingMore ? (y(), S("div", ut, " 加载更多... ")) : !o.hasMore && o.materials.length > 0 ? (y(), S("div", ht, " 没有更多数据了 ")) : R("", !0)
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
}, pt = /* @__PURE__ */ O(mt, [["__scopeId", "data-v-797b48ca"]]), ft = ["width", "height", "stroke"], gt = /* @__PURE__ */ j({
  __name: "IconClose",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(o) {
    return (t, e) => (y(), S("svg", {
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
    ])], 8, ft));
  }
}), vt = /* @__PURE__ */ O(gt, [["__scopeId", "data-v-218750c8"]]), yt = {
  key: 0,
  class: "upd-section-tools__panel"
}, wt = { class: "upd-section-tools__body" }, St = { class: "upd-section-tools__actions" }, bt = { class: "upd-section-tools__line" }, Ct = { class: "upd-section-tools__field" }, _t = { class: "upd-section-tools__line" }, $t = { class: "upd-section-tools__field" }, kt = { class: "upd-section-tools__panel" }, Dt = { class: "upd-section-tools__head" }, Et = { class: "upd-section-tools__desc" }, xt = { class: "upd-section-tools__body" }, Lt = { class: "upd-section-tools__actions" }, zt = { class: "upd-section-tools__line" }, It = { class: "upd-section-tools__field" }, Ut = { class: "upd-section-tools__line" }, Ht = { class: "upd-section-tools__field" }, Mt = { class: "upd-section-tools__line" }, Tt = { class: "upd-section-tools__field" }, At = /* @__PURE__ */ j({
  __name: "SectionTools",
  props: {
    sectionData: {},
    imageData: {},
    position: {}
  },
  emits: ["action", "image-action", "close"],
  setup(o) {
    return (t, e) => (y(), S("div", {
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
        ie(vt, {
          size: 16,
          "stroke-color": "#fff"
        })
      ]),
      o.imageData.show ? (y(), S("div", yt, [
        e[21] || (e[21] = n("div", { class: "upd-section-tools__head" }, [
          n("span", { class: "upd-section-tools__title" }, "图片")
        ], -1)),
        n("div", wt, [
          n("div", St, [
            n("div", {
              class: "upd-section-tools__action-btn",
              onClick: e[1] || (e[1] = (i) => t.$emit("image-action", "change"))
            }, " 换图 ")
          ]),
          n("div", bt, [
            e[19] || (e[19] = n("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            n("div", Ct, [
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
          n("div", _t, [
            e[20] || (e[20] = n("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            n("div", $t, [
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
      ])) : R("", !0),
      n("div", kt, [
        n("div", Dt, [
          e[22] || (e[22] = n("span", { class: "upd-section-tools__title" }, "内容块", -1)),
          n("span", Et, " 样式ID " + V(o.sectionData.id || "-"), 1)
        ]),
        n("div", xt, [
          n("div", Lt, [
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
          n("div", zt, [
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
            n("div", Ht, [
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
          n("div", Mt, [
            e[25] || (e[25] = n("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            n("div", Tt, [
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
}), Bt = /* @__PURE__ */ O(At, [["__scopeId", "data-v-f465a212"]]), Rt = ["width", "height", "stroke"], Nt = /* @__PURE__ */ j({
  __name: "IconCheck",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(o) {
    return (t, e) => (y(), S("svg", {
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
    ])], 8, Rt));
  }
}), Pt = /* @__PURE__ */ O(Nt, [["__scopeId", "data-v-0ae058a4"]]), Ft = { class: "ueditor-plus-designer" }, Vt = { class: "ueditor-plus-designer__body" }, jt = {
  key: 0,
  class: "ueditor-plus-designer__material"
}, qt = { class: "ueditor-plus-designer__editor" }, Kt = { class: "upd-editor-instance" }, Ot = ["id"], Wt = {
  key: 0,
  class: "upd-toolbar"
}, Xt = /* @__PURE__ */ j({
  __name: "Designer",
  props: {
    config: { default: () => ({}) },
    isIframe: { type: Boolean, default: !1 }
  },
  emits: ["ready", "change", "confirm"],
  setup(o, { expose: t, emit: e }) {
    const i = o, s = e, r = f(null), p = f(`upd_${Date.now()}`), l = f(!0), a = f(!1), d = f({ left: 0, top: 0 }), {
      categories: c,
      materials: h,
      total: L,
      loading: T,
      loadingMore: A,
      currentCategory: U,
      hasMore: W,
      changeCategory: J,
      search: Z,
      loadMore: E
    } = je(i.config), {
      currentSection: v,
      sectionData: q,
      imageData: x,
      prepareSectionStyle: G,
      prepareImageStyle: he,
      clearSelection: me
    } = qe(), {
      clearSectionFormat: pe,
      insertSection: ae,
      selectSection: fe,
      deleteSection: ge,
      moveSectionUp: ve,
      moveSectionDown: ye
    } = Ke();
    se(async () => {
      const u = document.getElementById(p.value);
      if (u) {
        r.value = new Ve({
          ...i.config,
          container: u
        });
        try {
          await r.value.init(), r.value.on("ready", () => {
            s("ready"), Q();
          }), r.value.on("change", (m) => {
            s("change", m);
          }), r.value.on("section-click", be), window.addEventListener("resize", Q);
        } catch (m) {
          console.error("Failed to initialize designer:", m);
        }
      }
    }), ce(() => {
      var u;
      window.removeEventListener("resize", Q), (u = r.value) == null || u.destroy();
    });
    const we = (u) => {
      r.value && r.value.insertSection(u.html, { id: u.id });
    }, Se = (u) => {
      Z(u);
    }, be = ({ section: u, element: m, image: I }) => {
      v.value = u, G(u), I ? he(u, I) : x.value.show = !1, a.value = !0, le(u);
    }, le = (u) => {
      if (!r.value) return;
      const m = r.value.getEditor();
      if (!m) return;
      const I = document.querySelector(`#${p.value}`);
      if (!I) return;
      const N = I.querySelector(".edui-editor-iframeholder > iframe");
      if (!N) return;
      const K = m.document, g = Ce(u, N, K), C = 320, b = 350;
      let X = g.left + (g.width - C) / 2 - g.relativeLeft;
      X = Math.max(0, Math.min(X, g.containerWidth - C));
      let H;
      if (g.spaceTop > g.spaceBottom && g.spaceTop > b)
        H = g.top - b - g.relativeTop, H = Math.max(0, H);
      else {
        H = g.top + g.height - g.relativeTop;
        const De = g.top + g.height + g.spaceBottom - g.relativeTop - b;
        H = Math.min(H, De);
      }
      d.value = {
        left: X,
        top: H
      };
    }, Ce = (u, m, I) => {
      const N = document.querySelector(".ueditor-plus-designer");
      if (!N)
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
      const K = m.getBoundingClientRect(), g = u.getBoundingClientRect(), C = N.getBoundingClientRect(), b = {
        left: K.left + g.left - I.documentElement.scrollLeft,
        top: K.top + g.top - I.documentElement.scrollTop,
        width: g.width,
        height: g.height,
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
      a.value && v.value && le(v.value);
    }, z = () => {
      v.value && v.value.classList.remove(w.SectionActiveClass), a.value = !1, me();
    }, _e = (u) => {
      if (!r.value || !v.value) return;
      const m = r.value.getEditor();
      if (m)
        switch (u) {
          case "clearFormat":
            pe(m, v.value), z();
            break;
          case "newSectionBefore":
            ae(m, v.value, "before"), z();
            break;
          case "newSectionAfter":
            ae(m, v.value, "after"), z();
            break;
          case "select":
            fe(m, v.value), z();
            break;
          case "delete":
            ge(m, v.value), z();
            break;
          case "moveUp":
            ve(m, v.value), z();
            break;
          case "moveDown":
            ye(m, v.value), z();
            break;
        }
    }, $e = (u) => {
      console.log("Image action:", u);
    }, ke = () => {
      if (r.value) {
        const u = r.value.getContent();
        s("confirm", u);
      }
    };
    return t({
      getContent: () => {
        var u;
        return ((u = r.value) == null ? void 0 : u.getContent()) || "";
      },
      setContent: (u) => {
        var m;
        (m = r.value) == null || m.setContent(u);
      }
    }), (u, m) => (y(), S("div", Ft, [
      n("div", Vt, [
        l.value ? (y(), S("div", jt, [
          ie(pt, {
            categories: $(c),
            materials: $(h),
            total: $(L),
            "current-category": $(U),
            loading: $(T),
            "loading-more": $(A),
            "has-more": $(W),
            onSelect: we,
            onChangeCategory: $(J),
            onSearch: Se,
            onLoadMore: $(E)
          }, null, 8, ["categories", "materials", "total", "current-category", "loading", "loading-more", "has-more", "onChangeCategory", "onLoadMore"])
        ])) : R("", !0),
        n("div", qt, [
          n("div", Kt, [
            n("div", {
              id: p.value,
              style: { height: "100%" }
            }, null, 8, Ot)
          ]),
          o.isIframe ? (y(), S("div", Wt, [
            n("a", {
              class: "upd-toolbar__item",
              href: "javascript:;",
              onClick: ke
            }, [
              ie(Pt, { size: 16 }),
              m[0] || (m[0] = He(" 完成 ", -1))
            ])
          ])) : R("", !0)
        ])
      ]),
      a.value ? (y(), Ue(Bt, {
        key: 0,
        "section-data": $(q),
        "image-data": $(x),
        position: d.value,
        onAction: _e,
        onImageAction: $e,
        onClose: z
      }, null, 8, ["section-data", "image-data", "position"])) : R("", !0)
    ]));
  }
});
export {
  Pt as IconCheck,
  vt as IconClose,
  pt as MaterialPanel,
  Bt as SectionTools,
  Xt as UEditorPlusDesigner,
  Xt as default,
  je as useMaterial,
  qe as useSection
};
