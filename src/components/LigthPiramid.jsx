import './Claro.css'; // Importe o arquivo CSS correto

function LightPiramid() {
  return (
    <div className="claro-pyramid-loader">
      <div className="claro-wrapper">
        <span className="claro-side claro-side1"></span>
        <span className="claro-side claro-side2"></span>
        <span className="claro-side claro-side3"></span>
        <span className="claro-side claro-side4"></span>
        <span className="claro-shadow"></span>
      </div>
    </div>
  )
}

export default LightPiramid;
