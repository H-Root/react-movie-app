import AnimationCard from "../components/layout/AnimationCard";

const About = () => {
  return (
    <AnimationCard>
      <div className="card image-full mx-auto max-w-md text-center shadow-xl">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" alt="no thing " />
        </figure>
        <div className="card-body justify-end">
          <h2 className="card-title">React Movie App</h2>
          <p>
            This My Second Project Using React, React Router V6, Framer Motion,
            TailiwndCSS and Daisy UI. Hope You Enjoy This Project
          </p>
          <div className="card-actions mx-auto">
            <button className="btn btn-primary">My Portfolio</button>
          </div>
        </div>
      </div>
    </AnimationCard>
  );
};

export default About;
