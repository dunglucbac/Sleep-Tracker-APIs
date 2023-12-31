'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [{
      "username": "pbaleine0",
      "email": "bkindall0@joomla.org",
      "password": "$2a$04$dB3OrNwt4Xs63GnFhl7tuutqiSTBXNH6EJrmACMUT8Ei5mrRqxCCS",
      "role": "normal"
    }, {
      "username": "jmould1",
      "email": "rfenimore1@biblegateway.com",
      "password": "$2a$04$CHtXLGdvpYDwZvYrZz8q6.BWOq22BClfsUP8yv6IZ1Pp9cn8OYSny",
      "role": "normal"
    }, {
      "username": "cabramchik2",
      "email": "abaudino2@ftc.gov",
      "password": "$2a$04$G.neUGjNiCOdBZSJfMNPMuq9KAdC9vDGNjzTIktOUMC8OkNNJFeIm",
      "role": "normal"
    }, {
      "username": "htipper3",
      "email": "ljendas3@pen.io",
      "password": "$2a$04$tYLc3aU1GZYss.Qz.3MpE.GBbyyhF2qzqiwSKU0z8eeGsWfqgAeca",
      "role": "normal"
    }, {
      "username": "aeldridge4",
      "email": "jlambin4@sciencedaily.com",
      "password": "$2a$04$UoWYWK7lGPi1Q9CQtM9lcOCClJZhcqBPp1sVkqpG9a.X1yHMC4YNe",
      "role": "normal"
    }, {
      "username": "hfrend5",
      "email": "pamori5@comcast.net",
      "password": "$2a$04$wAvwSABvsPdJ0P65L94x..vMJpb9u8N65GLvOjXfOWOug4Dp68JY2",
      "role": "normal"
    }, {
      "username": "sbrafferton6",
      "email": "eteodori6@sciencedirect.com",
      "password": "$2a$04$0Wa2pAfx7Ikgik5aGp7cj.mM54a0qkW5k/wq9Orbt8J51YvJIKely",
      "role": "normal"
    }, {
      "username": "sdeacock7",
      "email": "rrasmus7@tmall.com",
      "password": "$2a$04$uAZKsKPO3mAOa7/DqJ2wHeOf5Xfe83q.j4SMl0f36imf1ATwmDvwu",
      "role": "normal"
    }, {
      "username": "rcecil8",
      "email": "jgueinn8@blogs.com",
      "password": "$2a$04$ALt.WvgIaSZcHhPKQBytde9kPf/DRwvgD6QJ2Imr5xqrFzITdSyti",
      "role": "normal"
    }, {
      "username": "vnurden9",
      "email": "ephilippson9@pen.io",
      "password": "$2a$04$TCl6Uwwvm7/Wj1Zz3KxpuucdOGlrODL5RdC1lTU7/qADd/M5RFZou",
      "role": "normal"
    }, {
      "username": "kstidstona",
      "email": "jsiddalla@rambler.ru",
      "password": "$2a$04$iKucSWfVjN/Z3ZyOd9KBiulaOyFv37Sugpe77C4wGq/hUx4MbPsvO",
      "role": "normal"
    }, {
      "username": "amunktonb",
      "email": "rotteridgeb@reverbnation.com",
      "password": "$2a$04$Vy7ncLyhCmfZ5dPhHJZiPutOKaTLy0O9qGRbXcp.jXfIwegPeHQ8i",
      "role": "normal"
    }, {
      "username": "jlarbyc",
      "email": "jcoilsc@yandex.ru",
      "password": "$2a$04$8BeptrNq4NJ1lbVYJ48pWeuM9.xq48Hb2WfR8dTxn4K.TH/eUNDpu",
      "role": "normal"
    }, {
      "username": "uhyettd",
      "email": "jbalchind@ucoz.com",
      "password": "$2a$04$s1xFdR0zGGN9lCv5dHA/JexrFVuVv296yN3d2.QaFQOpwgMhDLrTm",
      "role": "normal"
    }, {
      "username": "eburtwhistlee",
      "email": "pbescobye@nymag.com",
      "password": "$2a$04$JLfdY5Qwa33k1RI/GxG4auK/3t7YnbpfIqQvXWx6bUOAWtsv5XgBy",
      "role": "normal"
    }, {
      "username": "vashardf",
      "email": "mdehnf@paypal.com",
      "password": "$2a$04$weDUsihkW58qskeBfb72e.FBWmxiLVblkU7MBUCtZ4mpChTHLofxy",
      "role": "normal"
    }, {
      "username": "wrichg",
      "email": "aaindriug@wisc.edu",
      "password": "$2a$04$gPbGULNfOGNE9VLS7ZO5VOoV4j940wYAaFCsnN0b1o.irFFJ8mIei",
      "role": "normal"
    }, {
      "username": "jdunbobbinh",
      "email": "nbrash@boston.com",
      "password": "$2a$04$UBhpqU63FqDWfH5bM7Un.emtbR25CkiHc63irY0LaSEEpr53Kjj3i",
      "role": "normal"
    }, {
      "username": "jmactavishi",
      "email": "tskatcheri@google.fr",
      "password": "$2a$04$VthA1mCpgtQtxEpFBdnK2eLJcv9M1Nc52iWIUZejcMRYlrvKqd1lm",
      "role": "normal"
    }, {
      "username": "btokellj",
      "email": "klittonj@ustream.tv",
      "password": "$2a$04$dwAai7jHlYCGw5GP2kYN0uVQb6ySISX30crm.tE62r2TjBSXu9oFW",
      "role": "normal"
    }, {
      "username": "rbixleyk",
      "email": "mteapek@pagesperso-orange.fr",
      "password": "$2a$04$0B4mbbapmnehEyJl8hkrGexk.eODQsN5mvP703WbHQKmfqREgHeSy",
      "role": "normal"
    }, {
      "username": "hmacfadzeanl",
      "email": "ffulksl@nhs.uk",
      "password": "$2a$04$0aTADgzC6YyiRtIIlTRvruRG0J6TTuMVhGyRQXwkSOTtEX7qRJB9W",
      "role": "normal"
    }, {
      "username": "fpriorm",
      "email": "rthreshm@shutterfly.com",
      "password": "$2a$04$KkznoevKOlTPOeW3H/SMD.pqvkz0F7qtfTfh9Kg6j7yuyxbnF.v3S",
      "role": "normal"
    }, {
      "username": "dreecen",
      "email": "orassmannn@ifeng.com",
      "password": "$2a$04$9Ww44BL2bv0inf2C5nFzOOiQE/WMhFHiUVdytpHzDgUB5Orj9wn56",
      "role": "normal"
    }, {
      "username": "ktarbatto",
      "email": "bmactrusteyo@ihg.com",
      "password": "$2a$04$lfE3mMEWHxovuQ.NPBX/JONZt0IwN.S62YPh4D/t0f6d2nilHRk5e",
      "role": "normal"
    }, {
      "username": "shilandp",
      "email": "mjeffcoatep@surveymonkey.com",
      "password": "$2a$04$ZZYErExT2boZhBvz2EmeZegcWPQ7M56r4f/PaCkiC4yWaDQrAG/va",
      "role": "normal"
    }, {
      "username": "ablazejq",
      "email": "eebbingq@bizjournals.com",
      "password": "$2a$04$nF4GCM/cABTopyuTgfj7gu78QQ4AcR9PHYY.gJX17OrRemqdQi2Ue",
      "role": "normal"
    }, {
      "username": "bairdr",
      "email": "bdentr@com.com",
      "password": "$2a$04$jH1/UV94dDHdFjKZNUzxD.cGsXk4zbUR0hpDZZK4DQxUWw3INcw9u",
      "role": "normal"
    }, {
      "username": "rschwanders",
      "email": "folczaks@nytimes.com",
      "password": "$2a$04$qHp4/WkHwgaJ1DYXTbAwK.Y1i.BZKXBGXKyv.Z9fMrHQXnoaz02eS",
      "role": "normal"
    }, {
      "username": "hdreamert",
      "email": "olympanyt@quantcast.com",
      "password": "$2a$04$hX5CNPDmznCDTrIvXhaaTu4hT5Z9g/fNZ.xnGoSlk/dXvukZGraK2",
      "role": "normal"
    }, {
      "username": "hwinfieldu",
      "email": "atidridgeu@themeforest.net",
      "password": "$2a$04$YXKAAuVS/UNhQJwnUHaoq.NyiF4FZh/CK2HuOG3aKhSIMYmSg91/y",
      "role": "normal"
    }, {
      "username": "kpaytonv",
      "email": "cbucknallv@cmu.edu",
      "password": "$2a$04$Pce7YKNq8GlHDbwcQIgM8OHONr2LpB3B10WK8BwE7vuKicpXNd0L2",
      "role": "normal"
    }, {
      "username": "wkrysztofowiczw",
      "email": "eocallaghanw@ovh.net",
      "password": "$2a$04$19xDEPE2IZuFyD8QZ75d.OwBC95vsCPAcIcLEAuHhPBQ0Pzw5ulF2",
      "role": "normal"
    }, {
      "username": "aabramskix",
      "email": "mbirdseyx@webs.com",
      "password": "$2a$04$3hzTAMqF3y0kcQTbWgLv1.nhUxl8kDjFNOEoM56ulMZwSeCzv5MTS",
      "role": "normal"
    }, {
      "username": "mcoasey",
      "email": "alucketty@jimdo.com",
      "password": "$2a$04$uZKvZSz4u8fOEvIHDs8TbuzWo0nt5LoJ/adImXwLI6xaRxv4zr.di",
      "role": "normal"
    }, {
      "username": "kwabersichz",
      "email": "tturriz@marketwatch.com",
      "password": "$2a$04$N0MXD/.BeiAQudLgYY10TOx4Tkc1oj1S4P6cl78dkUvbHyj6t1smm",
      "role": "normal"
    }, {
      "username": "mferrino10",
      "email": "chasslocher10@pinterest.com",
      "password": "$2a$04$ZoKqKZQSlc3uOkkno1q81ufnDlAp3qnaNHzKeO1gPTmEG1hbF7TY6",
      "role": "normal"
    }, {
      "username": "mnoto11",
      "email": "fdurram11@tinypic.com",
      "password": "$2a$04$g0OjanYVCim3xh0RfzEyYuQ.BuEQ3oW7.WXDFHf0RfTeMbUL3uQfy",
      "role": "normal"
    }, {
      "username": "asidebotham12",
      "email": "dcockcroft12@feedburner.com",
      "password": "$2a$04$eTle0MevE3tmxwr7tEGLgupsoGAA7.tvcSteFffHa6mrKOcbHT.Ae",
      "role": "normal"
    }, {
      "username": "lgilkes13",
      "email": "lduffin13@instagram.com",
      "password": "$2a$04$4s3riLSfLsHZgiHYOZrS1uqjD7PuyLGi0JOQjzFMuFAsmHK5vNHb.",
      "role": "normal"
    }, {
      "username": "bwillows14",
      "email": "ldoylend14@reference.com",
      "password": "$2a$04$EbM2vL1up8HGeNZa93/XsOt93VexphwK2M6scxGPkOuHTrtRlUefK",
      "role": "normal"
    }, {
      "username": "bbool15",
      "email": "kbossel15@ning.com",
      "password": "$2a$04$qghZlKCVmUriwLKKHglCEuBLta91kJJ69KntDKQVqkbnxcxgdf7l6",
      "role": "normal"
    }, {
      "username": "cmclugish16",
      "email": "jeastwell16@flickr.com",
      "password": "$2a$04$6CXJYSxe.gOXxHxFeHkQ1.ANgZ1HzBVcul0dxHhrBK3CrT3lFzFbe",
      "role": "normal"
    }, {
      "username": "lpehrsson17",
      "email": "ahoys17@spotify.com",
      "password": "$2a$04$9j2qDc9D.DbqSG5qLgFm0O25FrYcZLMozqPYvnQXaiMVIcTr0J/7u",
      "role": "normal"
    }, {
      "username": "cfiddymont18",
      "email": "bgwynn18@aboutads.info",
      "password": "$2a$04$JEOoA1AJ6pyscz9qxulBYepSHUn7FksoZ4T59/P365qu7rWzgIwI6",
      "role": "normal"
    }, {
      "username": "cmartygin19",
      "email": "cmckeady19@guardian.co.uk",
      "password": "$2a$04$GCB.azei1XdxUAxexhXaHOzwpB0RR6e.Ol2cH/aVJeZ6rJMEnKbmC",
      "role": "normal"
    }, {
      "username": "mhuygens1a",
      "email": "gdavenport1a@pagesperso-orange.fr",
      "password": "$2a$04$IM7q5/5wNspAEmdvKhEg5uMkJPX.npKMB1SyBOxQ9kwoQExzYGWpi",
      "role": "normal"
    }, {
      "username": "bboles1b",
      "email": "cisacq1b@blinklist.com",
      "password": "$2a$04$GL3ybGfhNcgQlmwDoQ9Quu4UVVsSbrSKDT1iRy2GmuUV0Kqxi5inK",
      "role": "normal"
    }, {
      "username": "lbuy1c",
      "email": "mspelman1c@army.mil",
      "password": "$2a$04$WF5g1Xg/Pttz.AbL8UxNhOf94lS8oL69Xlca1m21hjgMWOm8PueP6",
      "role": "normal"
    }, {
      "username": "hphilipson1d",
      "email": "lloines1d@tinypic.com",
      "password": "$2a$04$mXaWVekgKFG.eaNQ2bnliuzoeitzh.TizUhtNpwFWmL8IAjQWWEXa",
      "role": "normal"
    }, {
      "username": "lpaybody1e",
      "email": "mverrill1e@craigslist.org",
      "password": "$2a$04$HH8c.BEIrc.mTBRr9sFpDeB6OokKwwAf97YxBaPoC45V2jPst.OSC",
      "role": "normal"
    }, {
      "username": "tnunnery1f",
      "email": "gandras1f@simplemachines.org",
      "password": "$2a$04$8MK5gSqKxZxsSRe7PkhRveiWOrLamZHoz99fFj29W5BRIOWZRIQNm",
      "role": "normal"
    }, {
      "username": "hrocco1g",
      "email": "pjarville1g@seattletimes.com",
      "password": "$2a$04$vTJ6r2pqxjMgQOwQqY7feefNRYNiDhNJ27XVognbQgRQliKKFO1Em",
      "role": "normal"
    }, {
      "username": "lbaddeley1h",
      "email": "aoxbie1h@mysql.com",
      "password": "$2a$04$MH4EYFGYVmEMG3w1yzrUDOFzaHdy.hno9Dv2XUfzeQoWYQLii7dJS",
      "role": "normal"
    }, {
      "username": "ssissot1i",
      "email": "roller1i@google.ca",
      "password": "$2a$04$m2VKw.rAbMgI5WLCU11WD.33N95JM72kMLgoEGyhAX5wuGjOiYgLS",
      "role": "normal"
    }, {
      "username": "ccardnell1j",
      "email": "mfassam1j@tuttocitta.it",
      "password": "$2a$04$lYkt99SFuowXmUTZi4njR.V.fh2ZyzN3W2sfheezNykqT4hzQZkdy",
      "role": "normal"
    }, {
      "username": "lpolson1k",
      "email": "hbortoluzzi1k@sun.com",
      "password": "$2a$04$owCblxw5DTLzGS15MPnfp.S3JfwYoOPo0GskYH4c3D1shJe6mryua",
      "role": "normal"
    }, {
      "username": "ccrosscombe1l",
      "email": "fweddup1l@dailymotion.com",
      "password": "$2a$04$Fe4BWiIGQHpxEXUEvWwYLeIS2jImeATHz/jqKxsvyTXhv2PhoqLG2",
      "role": "normal"
    }, {
      "username": "jspradbrow1m",
      "email": "mavrahamy1m@pagesperso-orange.fr",
      "password": "$2a$04$X1Yw429eR.4Y4hCzYE9RZekCB8eEBxjuIUsvw4mBleNLPUl.5lRVG",
      "role": "normal"
    }, {
      "username": "sskelbeck1n",
      "email": "rfellgatt1n@wordpress.org",
      "password": "$2a$04$PIquEqUOomnl1oLBm2hcVOOjMTJx4d7wDOtCSg3S/YJKgewdYe46a",
      "role": "normal"
    }, {
      "username": "wduferie1o",
      "email": "gmccloch1o@cnet.com",
      "password": "$2a$04$PtdB.tHe006AFPvH3rTJ7O84frOtzE6SerwsOsxBnQBI218VFDUMG",
      "role": "normal"
    }, {
      "username": "rboichat1p",
      "email": "lcaunce1p@bravesites.com",
      "password": "$2a$04$/8ASowzAiUOzI/qSc/xCJuOX427mY3R.YJzGUVO3eGrTfrCj1buz6",
      "role": "normal"
    }, {
      "username": "jbartley1q",
      "email": "tmarini1q@tinyurl.com",
      "password": "$2a$04$.X.7VrNFkgK5FpXtafnhBO95hNjGp7vUVG77JJEOjvSSrLAAxjvKO",
      "role": "normal"
    }, {
      "username": "dbenedicto1r",
      "email": "gsaby1r@over-blog.com",
      "password": "$2a$04$sQUAfevfbfMC32nkf6hqqO.Kxi5EYIOoR9.ubAq9jVRetju3/5f5i",
      "role": "normal"
    }, {
      "username": "nhyndley1s",
      "email": "pmcgrae1s@slate.com",
      "password": "$2a$04$BotPnaybN0PFwiTA98TU1.Tt5ofYKWgw/.LHNq/wzyhm.oNpA4C5G",
      "role": "normal"
    }, {
      "username": "lsindell1t",
      "email": "kcancellario1t@timesonline.co.uk",
      "password": "$2a$04$oQOYDXnv3Ut/NUuT2hSNAeWoP5PrhgboC8Js.Cz/v7CeiOH8rbFSy",
      "role": "normal"
    }, {
      "username": "qburchett1u",
      "email": "pstandfield1u@theatlantic.com",
      "password": "$2a$04$.HNYefiu.ISUEua.q/veEum01GUYHyuzIa/qhyJggC/Rvgkg55BGy",
      "role": "normal"
    }, {
      "username": "bstreeting1v",
      "email": "proo1v@example.com",
      "password": "$2a$04$PbR2nTi9/oZ7C9Sv7MejiekPwdq6HDCvb5g7bNNaH3KvxqPi38F92",
      "role": "normal"
    }, {
      "username": "bhaster1w",
      "email": "cbarnewell1w@jimdo.com",
      "password": "$2a$04$/Mt42a3F5n17hig9Z.QAWuRIvGYOSeVnEEhwHsyWhqgzqJRD5hupO",
      "role": "normal"
    }, {
      "username": "amaude1x",
      "email": "cloghan1x@princeton.edu",
      "password": "$2a$04$K7ojuR3VNym95LKr7em4F.87AlxC.x8RgGHANEOwKaDKg7VYhH7mS",
      "role": "normal"
    }, {
      "username": "dclover1y",
      "email": "iraft1y@vk.com",
      "password": "$2a$04$K5JOLSDV0YEv8KnkP0mp5.7usjL9z1f383L.Cz7S/1aUuEMtwUslu",
      "role": "normal"
    }, {
      "username": "ldignon1z",
      "email": "lvansaltsberg1z@craigslist.org",
      "password": "$2a$04$5Ruw676tS7HMeJxLsPOWb.69TchPI8T3L0GGqnv/tMIOesUaoYgLi",
      "role": "normal"
    }, {
      "username": "osimoneton20",
      "email": "nroddick20@usatoday.com",
      "password": "$2a$04$ZH00/KTApxJXVNYC/R5N3O.1HUFMfDbTEFCSTFRMZRo5JOpea3Bdi",
      "role": "normal"
    }, {
      "username": "cmattecot21",
      "email": "pblazevic21@miitbeian.gov.cn",
      "password": "$2a$04$tlPlAXE5YgV6eQWo6rsjn.CbcZQZIXpO7OAFHMkl5LQ7LamhcrSn.",
      "role": "normal"
    }, {
      "username": "bboules22",
      "email": "tcraine22@bravesites.com",
      "password": "$2a$04$bzJ1G7bljCtGSLVCLFpKoeGFdf99lQt4fVBv7p1qOpe2cWEfwzRWO",
      "role": "normal"
    }, {
      "username": "kdonegan23",
      "email": "kbarabisch23@rambler.ru",
      "password": "$2a$04$DIGxwX/OZEowYnyv1jP8Nuqqka.4y7LAnzjsCl4qoCXO.pQepZqkS",
      "role": "normal"
    }, {
      "username": "fkellard24",
      "email": "amcfie24@umich.edu",
      "password": "$2a$04$N41PI31/dInpGVniXP6DTeofgrFPUQt03vfUxltKrynxYNO9CoEcS",
      "role": "normal"
    }, {
      "username": "bhawksworth25",
      "email": "hkeneleyside25@msu.edu",
      "password": "$2a$04$YKeUE1/UHDCoFqavyfLK9.gO1hIGGgYM.g26bQR6kjnoN3TtJSOs.",
      "role": "normal"
    }, {
      "username": "lmarquis26",
      "email": "qholyland26@aol.com",
      "password": "$2a$04$0Dm993GvAa2fsp2aaP7GmelbBa6zD7RdEarfhbY6DKEDiF.xgrfj2",
      "role": "normal"
    }, {
      "username": "mvanhault27",
      "email": "viannetti27@npr.org",
      "password": "$2a$04$HP41MLE.JE1NqkPjejQpWOGX0Zz/B/5cFaBCkUbc59ZGPCvOPA6rO",
      "role": "normal"
    }, {
      "username": "graselles28",
      "email": "ifawloe28@rambler.ru",
      "password": "$2a$04$eGvlFNCMSEiDMbLuTCsPE.RL0/xNLlKPTA0O2C4ck2fdgn9It7Bgi",
      "role": "normal"
    }, {
      "username": "ijerwood29",
      "email": "kjeaves29@mapquest.com",
      "password": "$2a$04$SvwE47.woAlZIkpyI7pKm.juyCmTW0lILLHpsihrJWM9gVIUYkQie",
      "role": "normal"
    }, {
      "username": "scadreman2a",
      "email": "eboyet2a@123-reg.co.uk",
      "password": "$2a$04$LGnekC4ok.rxWgGLiBfcauAv2u.pARVYRDoGkDcUPRlY3iX/2VCHa",
      "role": "normal"
    }, {
      "username": "owalsom2b",
      "email": "yhemeret2b@github.io",
      "password": "$2a$04$uixlUGDOvgMx.gG7FnSIeuRyl2O6uS6cUHHCxDmyCIi1qO7vtXCsK",
      "role": "normal"
    }, {
      "username": "rfraniak2c",
      "email": "kreedman2c@ft.com",
      "password": "$2a$04$6uOnVlvwl5bXer10KWswU.tSk3FKyFBs.dyU0MSfG7le8msi.4gGO",
      "role": "normal"
    }, {
      "username": "sbautiste2d",
      "email": "dsplain2d@seesaa.net",
      "password": "$2a$04$8niD7a4DurHg0UzJNaUQPOK9cnszgyXX/V53PXpOsJk9ZyOcs4lha",
      "role": "normal"
    }, {
      "username": "bochterlony2e",
      "email": "awapol2e@seesaa.net",
      "password": "$2a$04$8gT4HVY6GjwH6U/srMxysO6o4uObbeeqOydEE166hwKe9Ynetd9k6",
      "role": "normal"
    }, {
      "username": "amanginot2f",
      "email": "cdeeny2f@squidoo.com",
      "password": "$2a$04$yP/q8KSmIPG2JRWQ3t2YHekCTjmFPNrSLU2h.FdEeaWmCSAkW7BEa",
      "role": "normal"
    }, {
      "username": "oguillon2g",
      "email": "jkopman2g@merriam-webster.com",
      "password": "$2a$04$duIBUJdno5EjPOj8vLLhrey.ZZw8KVigvN1FO2XO95Z0L76LqRF2m",
      "role": "normal"
    }, {
      "username": "cdelascy2h",
      "email": "thaysar2h@fotki.com",
      "password": "$2a$04$NcFkp5QeMF09A8JiqIhqIuHHMu/oylBhErDSo2Go1V493.k/bYrim",
      "role": "normal"
    }, {
      "username": "fnurden2i",
      "email": "sbohlmann2i@smugmug.com",
      "password": "$2a$04$tzzmCi5BBQe/7rVXnNN9ZuKEEw6McJx/bMxELfpOL9um9WPAfRNqK",
      "role": "normal"
    }, {
      "username": "abradbrook2j",
      "email": "nsomerlie2j@tiny.cc",
      "password": "$2a$04$0AoBDdeT.iv3hpPfp4.jqOWTMJffQb3gLPnysbJYWGzbT0k9eQrL2",
      "role": "normal"
    }, {
      "username": "bsumpton2k",
      "email": "mseedman2k@fc2.com",
      "password": "$2a$04$gHfNPkojlYi/FwzNZj2X6.yaRL30yCV2juTUaOAR1DccPCa3kqlEO",
      "role": "normal"
    }, {
      "username": "kbortolotti2l",
      "email": "jwinscomb2l@exblog.jp",
      "password": "$2a$04$5mRn8U7WCtBchZT.RbtOl.tAZHXZVbmWixZvu26nVfxgix8aMDFDO",
      "role": "normal"
    }, {
      "username": "kabethell2m",
      "email": "kbollin2m@oaic.gov.au",
      "password": "$2a$04$EseiXEaJuByAWs.CejGAvuNPfovUTucFjGRBjor861rWMQVNjcWKK",
      "role": "normal"
    }, {
      "username": "dstreeton2n",
      "email": "flackey2n@cbslocal.com",
      "password": "$2a$04$JIYNCDOUha/ezAwtJ0wJleJ.B2yfTSxLILH3Dy6KzSuFvX0kSRG2G",
      "role": "normal"
    }, {
      "username": "kmagne2o",
      "email": "tfarrall2o@fema.gov",
      "password": "$2a$04$339EA2q1SICppQ79ubF6wO7hQiQzLaowX5YQ/G1o2438X5A.kxkCG",
      "role": "normal"
    }, {
      "username": "sgreenalf2p",
      "email": "mfitzsimons2p@hibu.com",
      "password": "$2a$04$LzduB9OhwA4lYyugTMBGFuRRL6NJa79mQWUvMnWuYR/JbreRSEI5K",
      "role": "normal"
    }, {
      "username": "tockleshaw2q",
      "email": "fcrocken2q@deviantart.com",
      "password": "$2a$04$W9KBvujR/Vr4rnT5M.tstutDQkk5CITK2llHutIsD1BXA4zWb.ANi",
      "role": "normal"
    }, {
      "username": "zbecket2r",
      "email": "ttinker2r@hhs.gov",
      "password": "$2a$04$Dq0TO0VaQyzKqdfa7Q5Mq.uGZD05y5d8b6vfetGhRxGSAgjOBgcmm",
      "role": "normal"
    }];
    data.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
