export const fetchUserData = async () => {

  const userData = await window.fbAPI("me?fields=id,name,picture");

  return userData;

};