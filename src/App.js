import React from "react";
import "./App.scss";
import "./reset.scss";

import HeroBlock from "./components/HeroBlock/HeroBlock";
import sponsor1 from "./components/HeroBlock/assets/sponsor1.svg";
import sponsor2 from "./components/HeroBlock/assets/sponsor2.svg";
import sponsor3 from "./components/HeroBlock/assets/sponsor3.svg";

import controlElem1 from "./components/Map/assets/table_of_levels.svg";
import controlElem2 from "./components/Map/assets/zoom.svg";
import controlElem3 from "./components/Map/assets/plus_minus.svg";

import Facts from "./components/Facts/Facts";

import Politic from "./components/Politic/Politic";

import Footer from "./components/Footer/Footer";

import Map from "./components/Map/Map";

function App() {
  const sponsors = [sponsor1, sponsor2, sponsor3];

  const anchorLinks = [
    {
      title: "Основные факты",
      link: "#generalFacts",
    },
    {
      title: "Индекс качества воздуха",
      link: "#aqIndex",
    },
    {
      title: "Политика по уменьшению загрязнений",
      link: "#politic",
    },
  ];

  const factsSlides = [
    {
      id: "001",
      link: require("./components/Facts/assets/slide1.jpg"),
      text: "Женщины и дети – главные жертвы загрязнения воздуха",
    },
    {
      id: "002",
      link: require("./components/Facts/assets/slide2.jpg"),
      text: "Защитники окружающей среды подвергаются преследованиям",
    },
    {
      id: "003",
      link: require("./components/Facts/assets/slide3.jpg"),
      text: "Загрязнение воздуха – нарушение прав человека",
    },
    {
      id: "004",
      link: require("./components/Facts/assets/slide4.jpg"),
      text:
        "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха",
    },
    {
      id: "005",
      link: require("./components/Facts/assets/slide5.jpg"),
      text:
        "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год",
    },
  ];

  const politicCards = [
    {
      title: "Промышленность",
      content:
        "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
      img: require("./components/Politic/assets/cardImg1.jpg"),
    },
    {
      title: "Транспорт",
      content:
        "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
        img: require("./components/Politic/assets/cardImg2.jpg"),
      },
    {
      title: "Городское планирование",
      content:
        "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
        img: require("./components/Politic/assets/cardImg3.jpg"),
      },
    {
      title: "Энергия",
      content:
        "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
        img: require("./components/Politic/assets/cardImg4.jpg"),
      },
    {
      title: "Энергетика",
      content:
        "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
        img: require("./components/Politic/assets/cardImg5.jpg"),
      },
    {
      title: "Утилизация отходов",
      content:
        "Cтратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
        img: require("./components/Politic/assets/cardImg6.jpg"),
      },
  ];

  const SiteAuthor = 'Антоном Чивиковым'
  const siteDesign = 'Валерией Бубырь'

  const controlElements = [controlElem1, controlElem2, controlElem3]



  return (
    <>
      <HeroBlock
        title="Качество атмосферного воздуха и здоровье"
        logos={sponsors}
        bgImg={require("./components/HeroBlock/assets/bg_hero.jpg")}
        links={anchorLinks}
      />

      <Facts title="Основные факты" slides={factsSlides} />

      <Map controlElements={controlElements} title="Индекс качества воздуха в режиме реального времени" tip="Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше."/>

      <Politic
        title="Политика по уменьшению загрязнений"
        subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
        items={politicCards}
      />

      <Footer links={anchorLinks} logos={sponsors} author={SiteAuthor} design={siteDesign}/>
    </>
  );
}

export default App;
