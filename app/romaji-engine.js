(function () {
  const kanaRoutes = {
    あ: ["a"], い: ["i"], う: ["u"], え: ["e"], お: ["o"],
    か: ["ka"], き: ["ki"], く: ["ku"], け: ["ke"], こ: ["ko"],
    さ: ["sa"], し: ["shi", "si"], す: ["su"], せ: ["se"], そ: ["so"],
    た: ["ta"], ち: ["chi", "ti"], つ: ["tsu", "tu"], て: ["te"], と: ["to"],
    な: ["na"], に: ["ni"], ぬ: ["nu"], ね: ["ne"], の: ["no"],
    は: ["ha"], ひ: ["hi"], ふ: ["fu", "hu"], へ: ["he"], ほ: ["ho"],
    ま: ["ma"], み: ["mi"], む: ["mu"], め: ["me"], も: ["mo"],
    や: ["ya"], ゆ: ["yu"], よ: ["yo"],
    ら: ["ra"], り: ["ri"], る: ["ru"], れ: ["re"], ろ: ["ro"],
    わ: ["wa"], を: ["wo", "o"], ん: ["n", "nn", "xn"],
    が: ["ga"], ぎ: ["gi"], ぐ: ["gu"], げ: ["ge"], ご: ["go"],
    ざ: ["za"], じ: ["ji", "zi"], ず: ["zu"], ぜ: ["ze"], ぞ: ["zo"],
    だ: ["da"], ぢ: ["ji", "di"], づ: ["zu", "du"], で: ["de"], ど: ["do"],
    ば: ["ba"], び: ["bi"], ぶ: ["bu"], べ: ["be"], ぼ: ["bo"],
    ぱ: ["pa"], ぴ: ["pi"], ぷ: ["pu"], ぺ: ["pe"], ぽ: ["po"],
    きゃ: ["kya"], きゅ: ["kyu"], きょ: ["kyo"],
    しゃ: ["sha", "sya"], しゅ: ["shu", "syu"], しょ: ["sho", "syo"],
    ちゃ: ["cha", "tya", "cya"], ちゅ: ["chu", "tyu", "cyu"], ちょ: ["cho", "tyo", "cyo"],
    にゃ: ["nya"], にゅ: ["nyu"], にょ: ["nyo"],
    ひゃ: ["hya"], ひゅ: ["hyu"], ひょ: ["hyo"],
    みゃ: ["mya"], みゅ: ["myu"], みょ: ["myo"],
    りゃ: ["rya"], りゅ: ["ryu"], りょ: ["ryo"],
    ぎゃ: ["gya"], ぎゅ: ["gyu"], ぎょ: ["gyo"],
    じゃ: ["ja", "jya", "zya"], じゅ: ["ju", "jyu", "zyu"], じょ: ["jo", "jyo", "zyo"],
    びゃ: ["bya"], びゅ: ["byu"], びょ: ["byo"],
    ぴゃ: ["pya"], ぴゅ: ["pyu"], ぴょ: ["pyo"],
    ぁ: ["xa", "la"], ぃ: ["xi", "li"], ぅ: ["xu", "lu"], ぇ: ["xe", "le"], ぉ: ["xo", "lo"],
    ゃ: ["xya", "lya"], ゅ: ["xyu", "lyu"], ょ: ["xyo", "lyo"], っ: ["xtu", "ltu", "xtsu"]
  };

  function buildRoutes(reading) {
    const units = tokenize(reading);
    let routes = [""];

    units.forEach((unit, index) => {
      if (unit.smallTsu) {
        const nextChoices = units[index + 1]?.choices ?? [];
        const prefixes = unique([
          ...nextChoices.map(getDoubleConsonant).filter(Boolean),
          "xtu",
          "ltu",
          "xtsu"
        ]);
        routes = combine(routes, prefixes.length > 0 ? prefixes : [""]);
        return;
      }

      routes = combine(routes, unit.choices);
    });

    return unique(routes);
  }

  function tokenize(reading) {
    const units = [];

    for (let i = 0; i < reading.length; i += 1) {
      const pair = reading.slice(i, i + 2);
      const char = reading[i];

      if (char === "っ") {
        units.push({ smallTsu: true });
        continue;
      }

      if (kanaRoutes[pair]) {
        units.push({ kana: pair, choices: kanaRoutes[pair] });
        i += 1;
        continue;
      }

      if (kanaRoutes[char]) {
        units.push({ kana: char, choices: kanaRoutes[char] });
        continue;
      }

      if (char === "ー") {
        units.push({ kana: char, choices: ["-"] });
        continue;
      }

      throw new Error(`Unsupported reading: ${reading} (${char})`);
    }

    return tuneNChoices(units);
  }

  function tuneNChoices(units) {
    return units.map((unit, index) => {
      if (unit.kana !== "ん") return unit;

      const next = units[index + 1];
      if (!next) return { ...unit, choices: ["n", "nn"] };

      const nextStartsWithVowelOrY = next.choices?.some((choice) => /^[aiueoy]/.test(choice));
      return {
        ...unit,
        choices: nextStartsWithVowelOrY ? ["n", "nn", "n'", "xn"] : ["n", "nn", "xn"]
      };
    });
  }

  function getDoubleConsonant(route) {
    if (/^[aiueon]/.test(route)) return "";
    if (route.startsWith("ch")) return "c";
    return route[0];
  }

  function combine(prefixes, choices) {
    const combined = [];
    prefixes.forEach((prefix) => {
      choices.forEach((choice) => {
        combined.push(`${prefix}${choice}`);
      });
    });
    return combined;
  }

  function unique(items) {
    return [...new Set(items)];
  }

  window.RomajiEngine = {
    buildRoutes,
    kanaRoutes
  };
}());
