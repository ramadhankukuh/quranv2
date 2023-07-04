import CustomLink from "../../components/CustomLink";
import IconHaditsCalligraphy from "../../components/icons/IconHaditsCalligraphy";
import IconMosque from "../../components/icons/IconMosque";
import IconNewspaper from "../../components/icons/IconNewspaper";
import IconQuranCalligraphy from "../../components/icons/IconQuranCalligraphy";


const apps = [

  {
    name: "Al-Quran",
    slug: "quran",
    icon: <IconQuranCalligraphy />,
    description: "Al-quran dengan terjemahan, tafsir, murottal, dll.",
    hover: {
      text: "Baca Al-Quran",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Hadits",
    slug: "hadits",
    icon: <IconHaditsCalligraphy />,
    description: "Hadits dari 8 mufassir dengan terjemahan.",
    hover: {
      text: "Baca Hadits",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Asmaul Husna",
    slug: "doa-harian",
    icon: <IconHaditsCalligraphy />,
    description: "bacaan asmaul husna.",
    hover: {
      text: "Baca Asmaul Husna",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Doa Harian",
    slug: "doa-harian",
    icon: <IconHaditsCalligraphy />,
    description: "beberapa bacaan doa harian.",
    hover: {
      text: "Baca Doa Harian",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Wirid",
    slug: "wirid",
    icon: <IconHaditsCalligraphy />,
    description: "beberapa bacaan wirid.",
    hover: {
      text: "Baca Wirid",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Tahlil",
    slug: "doa-harian",
    icon: <IconHaditsCalligraphy />,
    description: "beberapa bacaan tahlil.",
    hover: {
      text: "Baca Tahlil",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Waktu Sholat",
    slug: "prayer",
    icon: <IconMosque />,
    description: "Waktu sholat seluruh wilayah Indonesia.",
    hover: {
      text: "Cek Waktu Sholat",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
  {
    name: "Berita",
    slug: "berita",
    icon: <IconNewspaper />,
    description: "Berita islami terkini nasional & internasional.",
    hover: {
      text: "Baca Berita Islami",
      background: "hover:bg-[#6E57E0]",
      color: "text-[#00AEE5]",
    },
  },
];

const AppCard = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
      {apps.map((app) => (
        <CustomLink
          key={app.slug}
          href={app.slug}
          className={`group relative w-full overflow-hidden text-center flex p-8 justify-center items-center rounded-2xl bg-[#211D35] border ${app.hover.background}`}
        >
          <div className="flex flex-col gap-4 items-center justify-center group-hover:opacity-0 transition-opacity">
            <span className="w-24 max-h-24">{app.icon}</span>
            <h2 className="font-bold text-2xl tracking-tighter">{app.name}</h2>
            <p className="text-[#706F76]">{app.description}</p>
          </div>
          <span
            className={`absolute -translate-x-1/2 translate-y-1/2 bottom-0 ${app.hover.color} left-1/2 transition-all opacity-0 font-bold text-3xl group-hover:opacity-100 group-hover:bottom-1/2`}
          >
            {app.hover.text}
          </span>
        </CustomLink>
      ))}
    </div>
  );
};

export default AppCard;
