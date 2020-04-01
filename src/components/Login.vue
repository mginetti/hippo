<template>
  <div class="login">
    <div class="logo">
      <img src="img/Logo.png" alt />
    </div>
    <div class="text">
      <h3>
        Entra in questa avventura
        <br />insieme a Hippo
      </h3>
    </div>
    <div class="form">
      <input v-model="name" type="text" placeholder="Inserisci il tuo nome" />
      <button @click="setName()">GIOCA!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    setName() {
      this.$store.commit("setName", this.name);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss">
.login {
  position: absolute;
  z-index: 2;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    flex-basis: 33%;
    text-align: center;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .text {
    flex-basis: 5%;
    text-align: center;
  }
  .form {
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 80%;
    ::placeholder {
      color: #405b84;
      font-size: 20px;
    }
    input {
      margin-bottom: 25px;
      color: #405b84;
      font-weight: 600;
      padding: 10px 17px;
      background-color: #7eabbb;
      border-radius: 5px;
      border: unset;
    }
    button {
      background-color: #405b84;
      color: white;
      border-radius: 5px;
      padding: 10px 17px;
      border: unset;
    }
  }
}
</style>