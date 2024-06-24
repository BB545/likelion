import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "likelion",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 유튜브",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "likelionsswu",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "kiatigers",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "likelion2024",
        icon: <CiCoffeeCup />,
        src: "/gsap"
    },
    {
        title: "기아타이거즈",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "likelion",
        src: "/search/likelion"
    },
    {
        title: "likelion",
        src: "/search/likelion"
    },
    {
        title: "likelion",
        src: "/search/likelion"
    },
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]