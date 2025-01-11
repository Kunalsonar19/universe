import { useState, useRef } from "react";
import { FaHeartCircleCheck, FaHeartCircleMinus } from "react-icons/fa6";
import AnimatedTitle from "./AnimatedTitle";

export const TicketTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const Ticket = ({
  title,
  description,
  validity,
  dateUsed,
  slot,
  isUsed,
}) => {
  return (
    <div className="cardWrap">
      <div className={`card cardLeft ${isUsed ? "used" : ""}`}>
        <h1 className="font-general uppercase">
          <span className="font-bold">Wish</span> Pass
        </h1>
        <div className="title">
          <h2 className="font-bold">{title}</h2>
          <span>Title</span>
        </div>
        <div className="name">
          <h2 className="font-bold">{description}</h2>
          <span>Description</span>
        </div>
        <div className="seat">
          <h2 className="font-bold">{validity}</h2>
          <span>Valid Until</span>
        </div>
        <div className="time">
          <h2 className="font-bold">{dateUsed}</h2>
          <span>Date Used</span>
        </div>
      </div>
      <div className={`card cardRight ${isUsed ? "used" : ""}`}>
        {isUsed ? (
          <div className="flex justify-center items-center">
            <FaHeartCircleMinus className="text-3xl" />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <FaHeartCircleCheck className="text-3xl" />
          </div>
        )}
        <div className="number">
          <h3>{slot}</h3>
          <span>Wish</span>
        </div>
        <div className="barcode"></div>
      </div>
    </div>
  );
};

const Tickets = () => {
  return (
    <section id="tickets" className="pb-30">
      <div className="w-screen text-black-50">
        <div className="flex size-full flex-col items-center py-10">
          <p className="font-general text-sm uppercase md:text-[10px]">
            you'll like this!
          </p>

          <div className="relative size-full">
            <AnimatedTitle
              title="W<b>i</b>s<b>h</b> P<b>a</b>sses"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
          </div>

          <div className="mt-11 grid grid-cols-1 gap-7 md:grid-cols-4 place-items-center">
            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>A Magical Moment</>}
                description="Meeting Shraddha!"
                validity="∞"
                dateUsed="Soon"
                slot="1/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Our Marriage</>}
                description="A lifetime of love!"
                validity="∞"
                dateUsed="Soon"
                slot="2/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Wizards and adventure</>}
                description="HP Location Trip!"
                validity="∞"
                dateUsed="Soon"
                slot="3/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Under a starry sky</>}
                description="Spend Night in Farm!"
                validity="∞"
                dateUsed="Soon"
                slot="4/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Honeymoon in Manali</>}
                description="Romance in Snow!"
                validity="∞"
                dateUsed="Soon"
                slot="5/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Sweetness</>}
                description="Lots of Sweets & Food!"
                validity="∞"
                dateUsed="Soon"
                slot="6/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Travel to Antarctica</>}
                description="Romantic vibes!"
                validity="∞"
                dateUsed="Soon"
                slot="7/8"
              />
            </TicketTilt>

            <TicketTilt className="flex items-center justify-center">
              <Ticket
                title={<>Long Bike Rides</>}
                description="Thrills on wheels!"
                validity="∞"
                dateUsed="Soon"
                slot="8/8"
              />
            </TicketTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
