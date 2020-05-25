<template>
    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark row">
        <a class="navbar-brand" href="#">todo.</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">List</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/settings">Settings</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>