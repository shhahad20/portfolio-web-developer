import "../styles/threeD.scss";

const ThreeD: React.FC = () => {
  return (
    <div className="three-d-container">
      <div className="container">
        <img className="codepen" src="/codepen.svg" alt="3D codepen" />
        <img className="github" src="/github3d.svg" alt="3D Github" />
        <img className="web" src="/web3d.svg" alt="3D web" />
      </div>
    </div>
  );
};

export default ThreeD;
