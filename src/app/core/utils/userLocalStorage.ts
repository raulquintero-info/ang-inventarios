import { User } from "../auth/interfaces/user.interface";

export function getUserFromLocalStorage(): User {
  let currentUser: any;
  let user: User;
  currentUser = localStorage.getItem('user');
  localStorage.getItem('userLoginOn');
  user = JSON.parse(currentUser);


  return user;
}

export function putUserInLocalStorage(userData: User) {

  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('userLoginOn', JSON.stringify(true));

}
