document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const translations = {
    en: {
      "common.nav.home": "Home",
      "common.nav.cv": "CV",
      "common.nav.research": "Research",
      "common.nav.lecture": "Lecture",
      "common.nav.links": "Links",
      "common.language": "Language",
      "common.contact": "Contact",
      "home.name": "Mikihiro Fujii",
      "home.profile": "Profile",
      "home.institution": "Institution",
      "home.institution.value": "Graduate School of Science, Nagoya City University",
      "home.email": "E-mail",
      "home.research": "Research",
      "home.research.value": "Mathematical analysis of nonlinear PDEs in fluid dynamics",
      "home.research.detail": "My research field is the mathematical analysis of nonlinear partial differential equations. In particular, I mainly study partial differential equations arising in fluid dynamics, such as the Navier-Stokes equations. The methods I use are primarily harmonic-analytic, and I am interested in well/ill-posedness in scaling critical spaces and quantitive properties via the asymptotic behavior or singular limit of solutions.",
      "home.researchAreas": "Research Areas",
      "home.tag.navier": "Navier-Stokes equations",
      "home.tag.critical": "Critical spaces",
      "home.tag.fluid": "Fluid dynamics",
      "home.tag.qg": "Quasi-geostrophic equations",
      "home.tag.hall": "Hall-MHD system",
      "home.tag.boussinesq": "Boussinesq equations",
      "home.tag.compressible": "Compressible flows",
      "cv.eyebrow": "Curriculum Vitae",
      "cv.title": "CV",
      "cv.employment": "Employment",
      "cv.education": "Education",
      "cv.role.lecturer": "Lecturer",
      "cv.role.partTime": "Part-time Lecturer",
      "cv.role.assistantProfessor": "Assistant Professor",
      "cv.role.jspsPd": "JSPS Research Fellow (PD)",
      "cv.role.jspsDc": "JSPS Research Fellow (DC1)",
      "cv.role.ta": "Teaching Assistant",
      "research.eyebrow": "Papers and talks",
      "research.title": "Research",
      "research.description": "Mathematical analysis of nonlinear PDEs in fluid dynamics, especially Navier-Stokes type systems and critical function spaces.",
      "research.preprints": "Preprints",
      "research.journals": "Journal Papers (Peer Reviewed)",
      "research.proceedingsPeer": "Proceedings (Peer Reviewed)",
      "research.proceedings": "Proceedings (Without Peer Review)",
      "research.talks": "Talks",
      "paper.eyebrow": "Paper Details",
      "paper.abstract": "Abstract",
      "paper.links": "Links",
      "paper.journal": "Journal",
      "paper.back": "Back to Research",
      "paper.notFound": "Paper not found.",
      "lecture.eyebrow": "Teaching",
      "lecture.title": "Lecture",
      "lecture.kyushuTa": "Teaching Assistant at Kyushu University",
      "lecture.kyutech": "Part-time Lecturer at Kyushu Institute of Technology",
      "lecture.fit": "Part-time Lecturer at Fukuoka Institute of Technology",
      "lecture.kyushu": "Lectures at Kyushu University",
      "lecture.ncu": "Lectures at Nagoya City University",
      "links.eyebrow": "Resources",
      "links.title": "Links",
      "links.ncu": "Nagoya City University",
      "links.kyushu": "Kyushu University"
    },
    ja: {
      "common.nav.home": "ホーム",
      "common.nav.cv": "略歴",
      "common.nav.research": "研究業績",
      "common.nav.lecture": "教育活動",
      "common.nav.links": "リンク",
      "common.language": "言語",
      "common.contact": "連絡先",
      "home.name": "藤井幹大",
      "home.profile": "プロフィール",
      "home.institution": "所属",
      "home.institution.value": "名古屋市立大学大学院理学研究科",
      "home.email": "メール",
      "home.research": "研究分野",
      "home.research.value": "流体力学に現れる非線形偏微分方程式の数学解析",
      "home.research.detail": "私の研究分野は非線形偏微分方程式の数学解析であり，特にNavier-Stokes方程式などの流体力学に現れる偏微分方程式を主要な考察対象としております．研究において用いる手法は主に調和解析的手法であり，スケール臨界空間における適切性・非適切性および解の定量的な性質を漸近挙動等を通じて調べることに興味があります．",
      "home.researchAreas": "研究テーマ",
      "home.tag.navier": "Navier-Stokes 方程式",
      "home.tag.critical": "臨界空間",
      "home.tag.fluid": "流体力学",
      "home.tag.qg": "準地衡流方程式",
      "home.tag.hall": "Hall-MHD 系",
      "home.tag.boussinesq": "Boussinesq 方程式",
      "home.tag.compressible": "圧縮性流体",
      "cv.eyebrow": "履歴",
      "cv.title": "略歴",
      "cv.employment": "職歴",
      "cv.education": "学歴",
      "cv.role.lecturer": "講師",
      "cv.role.partTime": "非常勤講師",
      "cv.role.assistantProfessor": "助教",
      "cv.role.jspsPd": "日本学術振興会特別研究員 (PD)",
      "cv.role.jspsDc": "日本学術振興会特別研究員 (DC1)",
      "cv.role.ta": "ティーチングアシスタント",
      "research.eyebrow": "論文・講演",
      "research.title": "研究業績",
      "research.description": "流体力学に現れる非線形偏微分方程式、特に Navier-Stokes 型方程式と臨界関数空間の数学解析を研究しています。",
      "research.preprints": "プレプリント",
      "research.journals": "査読付き学術論文",
      "research.proceedingsPeer": "査読付きプロシーディングス",
      "research.proceedings": "プロシーディングス",
      "research.talks": "講演",
      "paper.eyebrow": "論文詳細",
      "paper.abstract": "アブストラクト",
      "paper.links": "リンク",
      "paper.journal": "ジャーナル",
      "paper.back": "研究ページに戻る",
      "paper.notFound": "論文が見つかりませんでした。",
      "lecture.eyebrow": "教育",
      "lecture.title": "教育活動",
      "lecture.kyushuTa": "九州大学におけるティーチングアシスタント (TA)",
      "lecture.kyutech": "九州工業大学における非常勤講師",
      "lecture.fit": "福岡工業大学における非常勤講師",
      "lecture.kyushu": "九州大学における講義",
      "lecture.ncu": "名古屋市立大学における講義等",
      "links.eyebrow": "リソース",
      "links.title": "リンク",
      "links.ncu": "名古屋市立大学",
      "links.kyushu": "九州大学"
    }
  };

  const getInitialLanguage = () => {
    const stored = localStorage.getItem("site-language");
    return stored === "ja" || stored === "en" ? stored : "en";
  };

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const isActive = button.getAttribute("data-lang-option") === language;
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-i18n-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-label");
      if (dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    localStorage.setItem("site-language", language);
    renderPaperDetail(language);
  };

  const normalizeTitle = (value) =>
    value
      .replace(/\s+/g, " ")
      .replace(/--/g, "-")
      .replace(/[‐‑‒–—]/g, "-")
      .replace(/\$\\widehat\{L\^p\}\$/g, "critical \\widehat{L^p}")
      .replace(/\$3\$/g, "3")
      .replace(/\$2\$/g, "2")
      .replace(/\\widehat\{L\^p\}/g, "\\widehat{L^p}")
      .trim()
      .toLowerCase();

  const getPaperMap = () => {
    const papers = window.PAPERS || [];
    const map = new Map();
    papers.forEach((paper) => {
      map.set(normalizeTitle(paper.listTitle || paper.title), paper);
      map.set(normalizeTitle(paper.title), paper);
    });
    return map;
  };

  const linkResearchPapers = () => {
    if (!window.PAPERS || !document.querySelector(".paper-list")) return;
    const paperMap = getPaperMap();

    document.querySelectorAll(".paper-list li em").forEach((titleElement) => {
      const paper = paperMap.get(normalizeTitle(titleElement.textContent));
      if (!paper) return;

      const href = `paper.html?id=${encodeURIComponent(paper.id)}`;
      const parentLink = titleElement.closest("a");
      if (parentLink) {
        parentLink.href = href;
        return;
      }

      const link = document.createElement("a");
      link.href = href;
      titleElement.replaceWith(link);
      link.appendChild(titleElement);
    });
  };

  const cleanLine = (value) =>
    value
      .replace(/\s+/g, " ")
      .replace(/^[,\s]+/, "")
      .replace(/[.\s]+$/, "")
      .trim();

  const splitVenueAndYear = (value) => {
    const cleaned = cleanLine(value);
    const yearMatch = cleaned.match(/\((\d{4})\)/);
    if (!yearMatch) {
      const toAppearMatch = cleaned.match(/,\s*(to appear\.?.*)$/i);
      if (toAppearMatch) {
        return {
          venue: cleanLine(cleaned.slice(0, toAppearMatch.index)),
          year: "",
          suffix: cleanLine(toAppearMatch[1])
        };
      }
      return { venue: cleaned, year: "", suffix: "" };
    }

    return {
      venue: cleanLine(cleaned.slice(0, yearMatch.index)),
      year: yearMatch[1],
      suffix: cleanLine(cleaned.slice(yearMatch.index + yearMatch[0].length).replace(/^\s*,?\s*/, ""))
    };
  };

  const formatPaperLists = () => {
    document.querySelectorAll(".paper-list li").forEach((item) => {
      if (item.dataset.formattedPaper === "true") return;

      const titleElement = item.querySelector("em");
      if (!titleElement) return;

      const titleText = titleElement.textContent.trim();
      const fullText = item.textContent.replace(/\s+/g, " ").trim();
      const titleIndex = fullText.indexOf(titleText);
      if (titleIndex < 0) return;

      const authors = cleanLine(fullText.slice(0, titleIndex));
      const afterTitle = fullText.slice(titleIndex + titleText.length);
      const { venue, year, suffix } = splitVenueAndYear(afterTitle);
      const existingLink = titleElement.closest("a");
      const internalHref = existingLink?.getAttribute("href") || "";
      const titleLine = document.createElement(internalHref.startsWith("paper.html") ? "a" : "span");
      titleLine.className = "paper-title-line";
      if (internalHref.startsWith("paper.html")) titleLine.href = internalHref;

      const titleEm = document.createElement("em");
      titleEm.textContent = titleText;
      titleLine.appendChild(titleEm);

      const authorsLine = document.createElement("span");
      authorsLine.className = "paper-authors-line";
      authorsLine.textContent = authors;

      item.replaceChildren(authorsLine, titleLine);

      if (venue) {
        const venueLine = document.createElement("span");
        venueLine.className = "paper-venue-line";
        venueLine.textContent = venue;
        if (year || suffix) {
          const yearElement = document.createElement("span");
          yearElement.className = "paper-year-inline";
          if (year) {
            venueLine.append(" ");
            yearElement.textContent = `(${year})${suffix ? `, ${suffix}` : ""}`;
          } else {
            yearElement.textContent = `, ${suffix}`;
          }
          venueLine.appendChild(yearElement);
        }
        item.appendChild(venueLine);
      }

      item.dataset.formattedPaper = "true";
    });
  };

  const setVisible = (element, isVisible) => {
    if (!element) return;
    element.hidden = !isVisible;
  };

  const setJournalMeta = (element, journal) => {
    if (!element) return;
    element.textContent = "";
    if (!journal) {
      setVisible(element, false);
      return;
    }

    const yearMatch = journal.match(/\s*(\([0-9]{4}\))\s*$/);
    const name = yearMatch ? journal.slice(0, yearMatch.index).trim() : journal;
    const nameElement = document.createElement("span");
    nameElement.className = "paper-detail-journal-name";
    nameElement.textContent = name;
    element.appendChild(nameElement);

    if (yearMatch) {
      element.append(" ");
      const yearElement = document.createElement("span");
      yearElement.className = "paper-detail-journal-year";
      yearElement.textContent = yearMatch[1];
      element.appendChild(yearElement);
    }

    setVisible(element, true);
  };

  function renderPaperDetail(language) {
    const detail = document.querySelector("[data-paper-detail]");
    if (!detail || !window.PAPERS) return;

    const dictionary = translations[language] || translations.en;
    const id = new URLSearchParams(window.location.search).get("id");
    const paper = window.PAPERS.find((candidate) => candidate.id === id);
    const titleElement = document.querySelector("[data-paper-title]");
    const authorsElement = document.querySelector("[data-paper-authors]");
    const journalMetaElement = document.querySelector("[data-paper-journal-meta]");
    const abstractElement = document.querySelector("[data-paper-abstract]");
    const preprintRow = document.querySelector("[data-paper-preprint-row]");
    const preprintLabel = document.querySelector("[data-paper-preprint-label]");
    const preprintLink = document.querySelector("[data-paper-preprint-link]");
    const journalRow = document.querySelector("[data-paper-journal-row]");
    const journalLink = document.querySelector("[data-paper-journal-link]");

    if (!paper) {
      if (titleElement) titleElement.textContent = dictionary["paper.notFound"];
      if (authorsElement) authorsElement.textContent = "";
      setJournalMeta(journalMetaElement, "");
      if (abstractElement) abstractElement.textContent = "";
      setVisible(preprintRow, false);
      setVisible(journalRow, false);
      return;
    }

    if (titleElement) titleElement.textContent = paper.title;
    if (authorsElement) authorsElement.textContent = paper.authors;
    setJournalMeta(journalMetaElement, paper.journal);
    if (abstractElement) abstractElement.textContent = paper.abstract[language] || paper.abstract.en;

    if (paper.preprintUrl) {
      setVisible(preprintRow, true);
      if (preprintLabel) preprintLabel.textContent = paper.preprintLabel || "arXiv";
      if (preprintLink) {
        preprintLink.href = paper.preprintUrl;
        preprintLink.textContent = paper.preprintUrl;
      }
    } else {
      setVisible(preprintRow, false);
    }

    if (paper.journalUrl) {
      setVisible(journalRow, true);
      if (journalLink) {
        journalLink.href = paper.journalUrl;
        journalLink.textContent = paper.journal || paper.journalUrl;
      }
    } else {
      setVisible(journalRow, false);
    }
  }

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === current || (current === "paper.html" && target === "research.html")) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang-option"));
      renderMath();
    });
  });

  linkResearchPapers();
  formatPaperLists();
  applyLanguage(getInitialLanguage());

  function renderMath() {
    if (!window.renderMathInElement) return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$", right: "$", display: false }
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      throwOnError: false,
      trust: false
    });
  }

  renderMath();
});
