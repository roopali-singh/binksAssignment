import "../../style/sharedComponetsStyle/PageTitle.css";

function PageTitle({ title }) {
  // //--------------------- CHECKING YOUR DEVICE --------------------------//

  var isOnIOS =
    // navigator.userAgent.match(/Safari/) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPhone/i);

  return (
    <header className={`pageTitle ${isOnIOS ? "iosDevice" : "nonIosDevice"}`}>
      <h1>{title}</h1>
    </header>
  );
}

export default PageTitle;
