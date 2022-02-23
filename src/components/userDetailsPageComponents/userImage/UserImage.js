import "../../../style/userDetailsPageStyle/userImage/UserImage.css";

function UserImage({ picture }) {
  return (
    <picture className="userImage">
      <source media="(min-width: 680px)" srcSet={picture?.large} />
      <source media="(min-width: 450px)" srcSet={picture?.medium} />
      <img className="userImage__img" src={picture?.thumbnail} />
    </picture>
  );
}

export default UserImage;
