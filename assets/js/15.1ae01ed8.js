(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{139:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"publishing-a-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishing-a-release","aria-hidden":"true"}},[e._v("#")]),e._v(" Publishing a Release")]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This documentation is specific to the core project team and serves to document how we create, deploy, and announce\nreleases of this software. It might be an interesting read, but you'll likely never use anything out of this on a\nday-to-day basis.")])]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#pick-a-codename"}},[e._v("Pick a Codename")])]),t("li",[t("a",{attrs:{href:"#create-the-release-branch"}},[e._v("Create the Release Branch")])]),t("li",[t("a",{attrs:{href:"#tag-a-release"}},[e._v("Tag a Release")]),t("ul",[t("li",[t("a",{attrs:{href:"#update-the-release-on-github"}},[e._v("Update the Release on Github")])])])]),t("li",[t("a",{attrs:{href:"#generate-signatures-hashes"}},[e._v("Generate Signatures & Hashes")]),t("ul",[t("li",[t("a",{attrs:{href:"#create-checksum"}},[e._v("Create Checksum")])]),t("li",[t("a",{attrs:{href:"#gpg-sign-release"}},[e._v("GPG Sign Release")])]),t("li",[t("a",{attrs:{href:"#attach-to-release"}},[e._v("Attach to Release")])])])]),t("li",[t("a",{attrs:{href:"#update-documentation"}},[e._v("Update Documentation")])]),t("li",[t("a",{attrs:{href:"#update-cdn"}},[e._v("Update CDN")])]),t("li",[t("a",{attrs:{href:"#make-discord-announcement"}},[e._v("Make Discord Announcement")])]),t("li",[t("a",{attrs:{href:"#example-process"}},[e._v("Example Process")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"pick-a-codename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pick-a-codename","aria-hidden":"true"}},[e._v("#")]),e._v(" Pick a Codename")]),e._v(" "),t("p",[e._v("If this is going to be a major version release "),t("code",[e._v("0.X")]),e._v(" or "),t("code",[e._v("1.X")]),e._v(" (not "),t("code",[e._v("0.0.X")]),e._v("), you will need to have a codename picked\nout for the release. This should be some type of rhyme or otherwise creative name, ideally using some type of Pterodactyl\nreleated species name.")]),e._v(" "),t("h2",{attrs:{id:"create-the-release-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-release-branch","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Release Branch")]),e._v(" "),t("p",[e._v("Releases should be created as their own branch on Github, following the GitFlow model. This means you'll need to create\na "),t("code",[e._v("release/vX.X.X")]),e._v(" branch. Once the branch is created you need to update the version number for the software. For the Panel\nthis requires editing "),t("code",[e._v("config/app.php")]),e._v(" and setting the specific "),t("code",[e._v("APP_VERSION")]),e._v(" "),t("em",[e._v("without")]),e._v(" a preceeding "),t("code",[e._v("v")]),e._v(". For the Daemon,\nyou need to edit "),t("code",[e._v("package.json")]),e._v(" and set the "),t("code",[e._v("version")]),e._v(" field, again "),t("em",[e._v("without")]),e._v(" a preceeding "),t("code",[e._v("v")]),e._v(".")]),e._v(" "),t("p",[e._v("Once you've created the branch and update the relevant file publish the branch to Github to begin the next steps.")]),e._v(" "),t("h2",{attrs:{id:"tag-a-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tag-a-release","aria-hidden":"true"}},[e._v("#")]),e._v(" Tag a Release")]),e._v(" "),t("p",[e._v("Once the branch is pushed up you need to tag a release and then configure it on Github. To do so, run the command below\nsetting the version correctly. This will create a tag for "),t("code",[e._v("v0.6.0")]),e._v(" on the "),t("code",[e._v("release/v0.6.0")]),e._v(" branch and sign it using your\nGPG key.")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Sign Your Releases")]),e._v(" "),t("p",[e._v("All releases must be made with a GPG signed tag. Do not create a tag without signing it.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -asm "),t("span",{attrs:{class:"token string"}},[e._v('"v0.6.0"')]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin v0.6.0\n")])])]),t("h3",{attrs:{id:"update-the-release-on-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-release-on-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Update the Release on Github")]),e._v(" "),t("p",[e._v("Once you've created and pushed up the tag you need to then go to the Github releases, find the most recent tag, and create\na nice release from it. The title should be "),t("code",[e._v("v1.2.3 (Codename)")]),e._v(", and the content should be from the Changelog for that release.\nAll minor version releases should use the same codename as the major release version.")]),e._v(" "),t("h2",{attrs:{id:"generate-signatures-hashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-signatures-hashes","aria-hidden":"true"}},[e._v("#")]),e._v(" Generate Signatures & Hashes")]),e._v(" "),t("p",[e._v("Once you've created the release on Github, view it and select the option to download the "),t("code",[e._v(".tar.gz")]),e._v(" archive of the release.\nOnce downloaded, rename it to "),t("code",[e._v("panel.tar.gz")]),e._v(" or "),t("code",[e._v("daemon.tar.gz")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("mv")]),e._v(" panel-v1.2.3.tar.gz panel.tar.gz\n")])])]),t("h3",{attrs:{id:"create-checksum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-checksum","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Checksum")]),e._v(" "),t("p",[e._v("Then, create the SHA 256 checksum and write it to a file which will be uploaded to the release on Github.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("shasum -a 256 panel.tar.gz "),t("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" checksum.txt\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# Dump the output for easy pasting into the release")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("cat")]),e._v(" checksum.txt\n")])])]),t("h3",{attrs:{id:"gpg-sign-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpg-sign-release","aria-hidden":"true"}},[e._v("#")]),e._v(" GPG Sign Release")]),e._v(" "),t("p",[e._v("Finally, create a GPG-signed file to verify the integrity of the release. This must be created using Pterodactyl's key,\nso chances are that only Dane will be doing this part.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("gpg --detach-sig --output panel.asc panel.tar.gz\n")])])]),t("h3",{attrs:{id:"attach-to-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attach-to-release","aria-hidden":"true"}},[e._v("#")]),e._v(" Attach to Release")]),e._v(" "),t("p",[e._v("Finally, upload "),t("code",[e._v("panel.tar.gz")]),e._v(", "),t("code",[e._v("checksum.txt")]),e._v(", and "),t("code",[e._v("panel.asc")]),e._v(" to the release as attachments. This will allow all of our\ndefined links to continue working. In addition, add a section to the release titled "),t("code",[e._v("#### SHA256 Checksum")]),e._v(" with the content\nof the checksum for people to verify with.")]),e._v(" "),t("h2",{attrs:{id:"update-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-documentation","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Documentation")]),e._v(" "),t("p",[e._v("After the release is created and ready to go, update the relevant documentation to ensure it will be the version people\ninstall or upgrade to. You should also make sure all of the documentation for installing or upgrading is squared away and\nready to go.")]),e._v(" "),t("h2",{attrs:{id:"update-cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-cdn","aria-hidden":"true"}},[e._v("#")]),e._v(" Update CDN")]),e._v(" "),t("p",[e._v("Dane will need to update the CDN "),t("code",[e._v("releases.json")]),e._v(" file to point to the most recent version of the Panel and Daemon so that\nnotifications show up on the Daemon and Panel encouraging people to update.")]),e._v(" "),t("h2",{attrs:{id:"make-discord-announcement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-discord-announcement","aria-hidden":"true"}},[e._v("#")]),e._v(" Make Discord Announcement")]),e._v(" "),t("p",[e._v("The last step is to make an announcement on Discord letting "),t("code",[e._v("@everyone")]),e._v(' know that a new release is available, and encouraging\nthem to update. Include relevant links to stem off the inevitable flood of "how 2 update" questions that will follow.')]),e._v(" "),t("h2",{attrs:{id:"example-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-process","aria-hidden":"true"}},[e._v("#")]),e._v(" Example Process")]),e._v(" "),t("p",[e._v("The entire process, command wise, will probably look something like below:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b release/v1.2.3\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# make file edits")]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin release/v1.2.3\n\n"),t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -as v1.2.3 -m "),t("span",{attrs:{class:"token string"}},[e._v('"v1.2.3"')]),e._v("\n"),t("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin v1.2.3\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# edit release on Github, download files")]),e._v("\n\n"),t("span",{attrs:{class:"token function"}},[e._v("mv")]),e._v(" panel-1.2.3.tar.gz panel.tar.gz\nshasum -a 256 panel.tar.gz "),t("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" checksum.txt\n"),t("span",{attrs:{class:"token function"}},[e._v("cat")]),e._v(" checksum.txt\n\ngpg --detach-sig --output panel.asc panel.tar.gz\n\n"),t("span",{attrs:{class:"token comment"}},[e._v("# attach to release")]),e._v("\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);