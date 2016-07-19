<template lang="jade">
    .col-xs-12.col-sm-12.col-md-6.col-lg-6.col-xs-offset-0.col-sm-offset-0.col-md-offset-3.col-lg-offset-3.toppad
        .panel.panel-info
            .panel-heading
                h3.panel-title {{ user.name }} (@{{ user.login }})
            div.panel-body
                .row
                    .div.col-md-3.col-lg-3(align="center")
                        img.img-circle.img-responsive(alt="User Pic", :src="user.avatar_url")

                    div.col-md-9.col-lg-9
                        table.table.table-user-information
                            tbody
                                tr
                                    td Bio:
                                    td {{ user.bio }}
                                tr
                                    td Public repos:
                                    td {{ user.public_repos }}
                                tr
                                    td Followers:
                                    td {{ user.followers }}
                                tr
                                    td Following:
                                    td {{ user.following }}
                                tr
                                    td Location:
                                    td {{ user.location }}
                                tr
                                    td Email:
                                    td
                                        a(:href="mailto") {{ user.email }}

                        a.btn.btn-primary(:href="user.html_url" target="_blank")
                            i.fa.fa-user
                            | View profile
                        a.btn.btn-primary(:href="user.blog" target="_blank")
                            i.fa.fa-book
                            | View blog
</template>
<script>
    export default {
        name: 'Profile',
        props: {
            user: Object
        },
        computed: {
            mailto () {
                return 'mailto:' + this.user.email
            }
        }
    }
</script>
<style lang="scss">
    .table-user-information {
        tbody {
            tr {
                border-top: 1px solid rgb(221, 221, 221);

                &:first-child {
                     border-top: 0;
                 }

                td {
                    border-top: 0;
                }
            }
        }

    }
    .toppad {
        margin-top:20px;
    }
</style>
