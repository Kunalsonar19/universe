import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

export const Entry = ({ date, title, text }) => {
  return (
    <div className="px-5 max-w-4xl">
      <div className="inline-flex flex-col sm:flex-row">
        <p className="journal__entry-date">@ {date}</p>
        <p className="journal__entry-title"> — {title}</p>
      </div>
      <div>
        <p className="mt-3 text-md md:text-base">{text}</p>
      </div>
    </div>
  );
};

const Journal = () => {
  return (
    <section id="journal" className="pb-30">
      <div className="w-screen text-black-50">
        <div className="flex size-full flex-col items-center py-10">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Some things on my mind
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="T<b>h</b>ou<b>gh</b>ts"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
          </div>

          <div className="mt-11 grid text-center w-full grid-cols-1 gap-7 md:grid-cols-1 place-items-center">
            <Entry
              date="December 31, 2024 Tuesday"
              title={<>Missing each other</>}
              text={
                <>
                  miles apart but hearts closer than ever. Missing you feels
                  heavy, but the thought of us together soon keeps me going. And
                  after marriage, every New Year, we’ll celebrate
                  together—forever, just you and me. ❤️❤️:){" "}
                </>
              }
            />

            <Entry
              date="January 1, 2025 Wednesday"
              title={<>Love you, always</>}
              text={
                <>
                  A new year begins, and though we’re still apart, my heart
                  feels closer to you than ever. This distance is only temporary
                  because soon, we’ll be together. I can't wait for the day when
                  every New Year starts with you by my side, holding hands,
                  sharing dreams, and celebrating our forever love. ❤️❤️:){" "}
                </>
              }
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <Button
              title="Want more? soon."
              containerClass="mt-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
