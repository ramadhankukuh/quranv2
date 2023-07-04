import { Fragment } from "react";

const ContentSimple = ({ ayahs, currentAudioIndex, isPlaying }) => {
  return (
    <div className="w-full my-16">
      <p dir="rtl" className="text-center max-w-3xl mx-auto">
        {ayahs.map((ayah) => (
          <Fragment key={ayah.number.inQuran}>
            <span
              data-number-ayah-in-quran={ayah.number.inQuran}
              style={{ lineHeight: "2.2" }}
              className={`font-arabic text-3xl  ${
                isPlaying && currentAudioIndex === ayah.number.inSurah - 1
                  ? "warna-abu-text"
                  : ""
              }`}
            >
              {ayah.arab}
            </span>
            <span className="warna-biru-bg rounded-full h-6 w-6 mx-4 font-sans text-sm p-2 font-semibold">
              {ayah.number.inSurah}
            </span>
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default ContentSimple;
