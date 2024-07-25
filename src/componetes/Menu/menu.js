import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
.menu {
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 20% 1% 20%;
  /* margin: 2% 20% 0 2%; */
}

.menu .menu-desktop ul {
  list-style-type: none;
}

.menu li a {
  color: #9a9595;
  font-size: 18px;
  text-decoration: none;
  transition: .2s;

}

nav a:hover {
  color: white;
  transform: scale(1.05);
}

.menu li {
  display: inline-block;
  /* padding-left: 40px; */
  margin-left: 40px;

}

.menu .logo img {
  height: 45px;
}`