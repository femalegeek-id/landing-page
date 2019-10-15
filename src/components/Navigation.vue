<template>
    <nav id="nav-fg" class="navbar navbar-expand-md bg-pink-fg navbar-dark fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#"><img :src="logo" alt="Logo FemaleGeek" class="logo-header"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav mr-auto menu">
                    <li class="navbar-item active"><a class="nav-link" href="/"> Beranda</a></li>
                    <li class="navbar-item"><a class="nav-link" href="#about"> Tentang Kami</a></li>
                    <li class="navbar-item"><a class="nav-link" href="#about"> Kontak Kami</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data:()=>({
            logo:require("@/assets/logo.png")
        })
}
</script>

<style>

</style>