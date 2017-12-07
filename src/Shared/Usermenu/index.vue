<template>
  <div class="user-menu">
    <a href="#" class="handler">
      <span class="img" style="background-image:url('https://res.cloudinary.com/njcd/image/upload/v1495145939/2017site/anon.png')"></span>
      <span class="name">John Doe</span>
      <i class="fa fa-caret-down"></i>
    </a>
    <div class="dropdown">
      <a href="/profile">My Profile</a>
      <a href="/logout">Logout</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Usermenu'
  }
</script>

<style scoped>
.user-menu {
	float: left;
	font-weight: bold;
	margin-right: 20px;
	padding:10px;
	position: relative;
	text-align: left;
}
.user-menu.active {
	background: #252e43;
}
.handler {
	color: white;
}
.img {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: cover;
  border-radius: 50%;
  background-color: #242a36;
  margin-right: 10px;
  top: 5px;
  position: relative;
}
.name {
	display: inline-block;
}
.name:after {
	content: "|";
	color: #48587c;
	display: inline-block;
	margin-left: 10px;
	margin-right: 10px;
}
.user-menu i {
	color: #48587c;
}
.dropdown {
	display: none;
	position: absolute;
	background: #252e43;
	padding: 10px 20px;
	top: 100%;
	width: 100%;
	left: 0;
	border-top: 1px solid #293756;
	box-shadow: 2px 2px 10px #182238;
}
.dropdown a {
  color: white;
}
.user-menu.active .dropdown {
	display: block;
}


.user-menu--white .handler,
.user-menu--white .dropdown a {
	color: #214ba7;
	transition: none;
}
.user-menu--white.active a {
	color: white;
}
.user-menu--white .name:after {
	color: #838ca0;
}
.user-menu--white i {
	color: #838ca0;
}

</style>
