<template>
    <div>
        <form class="mx-auto">
            <div class="mb-3">
                <label for="login_input" class="form-label">Login:</label>
                <input id="login_input" class="form-control" type="text">
            </div>

            <div class="mb-3">
                <label for="password_input" class="form-label">Password:</label>
                <input id="password_input" class="form-control" type="password">
            </div>

            <button class="btn btn-primary">Connexion</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Accueil',
    props: {
        message: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
