<template>

    <!-- Footer -->
    <footer class="footer text-white bg-img bg-fixed" style="background-image: url(/public/assets/theme/img/vector/9.jpg)" data-overlay="8">
        <div class="container py-7">
            <div class="row gap-y">

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.fBarOrganization') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarAboutOrganization') }}</router-link>
                        <router-link to="/contact" class="nav-link" >{{ $i18n.t('layout.footer.fBarContactOrganization') }}</router-link>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.fBarBlockchain') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to=""  class="nav-link" >{{ $i18n.t('layout.footer.fBarWhyPp') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarSecurity') }}</router-link>
                        <router-link class="nav-link" to="/faq">{{ $i18n.t('layout.footer.fBarAgainFaq') }}</router-link>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.fBarCommunity') }}</strong></h6>
                    <div class="nav flex-column">
                        <a class="nav-link" href="https://github.com/PandoraPay" target="_blank">{{ $i18n.t('layout.footer.fBarGitHub') }}</a>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <h6 class="mb-4"><strong>{{ $i18n.t('layout.footer.fBarSupport') }}</strong></h6>
                    <div class="nav flex-column">
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarHelpCenter') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarGuides') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarApi') }}</router-link>
                        <router-link to="" class="nav-link" >{{ $i18n.t('layout.footer.fBarAgainMoreFaq') }}</router-link>
                    </div>
                </div>


            </div>
        </div>

        <div class="container">
        <div class="row gap-y">

            <div class="col-md-6 text-center text-md-left">
                <small class="opacity-70">{{ $i18n.t('layout.footer.fBarPpDescription') }}</small>
            </div>


        </div>
    </div>
    </footer>


</template>

<script>

import config from "build/config/config";

export default {

    computed: {
        config(){
            return config.app;
        }
    }

}
</script>

<style scoped>

</style>
