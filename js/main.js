const sectionPlayerStatistics = document.querySelector('section.player-statistics');
const sectionStartCurtain = document.querySelector('section.curtain');
const sectionStart = document.querySelector('section.start');
const sectionHome = document.querySelector('section.home');
const sectionShop = document.querySelector('section.shop');
const sectionBattleField = document.querySelector('section.battle-field');
const characters = ['img/asuna20.png', 'img/kirito17.png'];



const character = document.querySelector('section.home img.main-character');
const characterBattle = document.querySelectorAll('div.fight-character img');
const characterEq = document.querySelector('div.eq-character img');


const characterEqLvl = document.querySelector('div.eq-character h2 span');


const articleSkins = document.querySelector('.home article.skins');
const articleStatistics = document.querySelector('.home article.statistics');
const articleEquipment = document.querySelector('.home article.equipment');
const articleAchievements = document.querySelector('.home article.achievements');
const articleUpgrade = document.querySelector('.home article.upgrade');
const articleArtifacts = document.querySelector('.home article.artifacts');

const articleCurtain = document.querySelector('.home div.home-curtain');
const articleMoob = document.querySelector('.battle-field article.moob');
const articleDungeon = document.querySelector('.battle-field article.dungeon');
const articleBoss = document.querySelector('.battle-field article.boss');



const lvlCurtain = document.querySelector('div.lvl-curtain');
const lvlInformation = document.querySelector('div.lvl-information');
const lvlInformationSpan = document.querySelector('div.lvl-information span');


const notEnoughtMoney = document.querySelector('div.not-enought-money');
const notEnoughtMoneyClose = document.querySelector('div.not-enought-money div.not-enought-money-close img');
notEnoughtMoneyClose.addEventListener('click', function () {
    notEnoughtMoney.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3'
})


const shopSpanName = document.querySelector('article.items-to-buy div.hello span.name');
const shopSpantxt = document.querySelector('article.items-to-buy div.hello span.txt1');


const acceptCurtain = document.querySelector('div.upgrade-action div.accept-curtain');

const visualMoney = document.querySelector('.player-statistics p.money span');

const upgradesPriseSpan = document.querySelector('div.upgrade-accept span');
upgradesPriseSpan.textContent = 1000;

const text5 = document.querySelector('span.text5');
const noAttack = document.querySelector('div.no-attack');
const noAttackBack = document.querySelector('div.noattack-back');
noAttackBack.addEventListener('click', function () {
    noAttack.style.display = 'none';
    lvlCurtain.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
});
const noAttackGo = document.querySelector('div.noattack-go');
noAttackGo.addEventListener('click', function () {
    noAttack.style.display = 'none';
    lvlCurtain.style.display = 'none';
    sectionBattleField.classList.add('active');
    music.changeMusic(3);
    audioEfects.src = 'mp3/goBattle.mp3';
});



const date = new Date;
let startTime;








class Move {
    constructor() {


    }
    back(mus) {
        sectionHome.classList.remove('active');
        sectionShop.classList.remove('active');
        sectionBattleField.classList.remove('active');
        music.changeMusic(0);
        if (mus === 0) {
            audioEfects.src = 'mp3/goHome.mp3';
        } else if (mus === 1) {
            audioEfects.src = 'mp3/goHome.mp3';
        } else if (mus === 2) {
            audioEfects.src = 'mp3/goBattle.mp3';
        }
    }
    closeArticle() {
        articleEquipment.classList.remove('active');
        articleSkins.classList.remove('active');
        articleStatistics.classList.remove('active');
        articleCurtain.classList.remove('active');
        articleAchievements.classList.remove('active');
        articleArtifacts.classList.remove('active');
        articleUpgrade.classList.remove('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    closeFight() {
        articleMoob.classList.remove('active');
        articleDungeon.classList.remove('active');
        articleBoss.classList.remove('active');
        music.changeMusic(3);
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    closeMusicValue() {
        musicVolume.style.display = 'none';
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    closeLvl() {
        lvlInformation.style.display = 'none';
        lvlCurtain.style.display = 'none';
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    goHome() {
        sectionHome.classList.add('active');
        music.changeMusic(2);
        audioEfects.src = 'mp3/goHome.mp3';
    }
    goBattle() {
        if (attackFromWEAPON === 0) {
            noAttack.style.display = 'block';
            lvlCurtain.style.display = 'block';
            audioEfects.src = 'mp3/clickClose.mp3';
        } else {
            sectionBattleField.classList.add('active');
            music.changeMusic(3);
            audioEfects.src = 'mp3/goBattle.mp3';
        }
    }
    goShop() {
        sectionShop.classList.add('active');
        music.changeMusic(1);
        audioEfects.src = 'mp3/goShop.mp3';
    }
    goFightMoob() {
        articleMoob.classList.add('active');
        music.changeMusic(4);
        fight.setNewMoob(0);
        audioEfects.src = 'mp3/goBattle.mp3';
    }
    goFightDungeon() {
        articleDungeon.classList.add('active');
        music.changeMusic(5);
        fight.setNewMoob(1);
        audioEfects.src = 'mp3/goBattle.mp3';
    }
    goFightBoss() {
        articleBoss.classList.add('active');
        music.changeMusic(6);
        if (bossID === 10) {
            pBoss.textContent = `Piętro ${bossID}`;
            monsterBoss.src = monstersImg[3];
            timeToDefeatMonsterBoss.textContent = 60;
            visualTimeBoos.style.width = 100 + '%';
            hpMonsterBoss.textContent = bossesProperties[0].hp;
            visualHpBoss.style.width = 100 + '%';
            goAtackMoob.addEventListener('click', attackMoob);
            goAtackDungeon.addEventListener('click', attackDungeon);
            goAtackBoss.addEventListener('click', attackBoss);
        } else {
            pBoss.textContent = `Piętro ${bossID}`;
            fight.setNewMoob(2);
        }
        audioEfects.src = 'mp3/goBattle.mp3';
    }
    chooseAsuna() {
        sectionStart.classList.remove('active');
        sectionPlayerStatistics.classList.add('active');
        character.src = characters[0];
        characterBattle.forEach(char => {
            char.src = characters[0];
        })
        characterEq.src = characters[0]
        playerStats.playerStats.character = 'Asuna';
        render.renderPlayerStats();
        skinsToBuy.setSkisToAsuna();
        skinsToBuy.setAddEventListenerOnSkins();

        shopSpanName.textContent = 'asuna';
        shopSpantxt.textContent = 'chciała';
        text5.textContent = 'pewna';

        const container = document.createElement('div');
        container.classList.add('single-skin');
        container.setAttribute('data-name', 'Asuna');
        container.setAttribute('data-imgID', 19);
        container.style.border = '2px solid #ffb700';
        //        container.addEventListener('mouseenter', function () {
        //            audioEfects.src = 'mp3/clickSkin.mp3';
        //        });
        const img = document.createElement('img');
        img.src = characters[0];
        const span = document.createElement('span');
        span.classList.add('skin-span');
        span.textContent = `Asuna`

        availableSkins.append(container);
        container.append(img);
        container.append(span);
        asunaKirito = 0;

        instAll.classList.remove('unactive');
        audio.src = 'mp3/welcome.mp3';

        startTime = (date.getTime() / 1000).toFixed() * 1;
    }
    chooseKirito() {
        sectionStart.classList.remove('active');
        sectionPlayerStatistics.classList.add('active');
        character.src = characters[1];
        characterBattle.forEach(char => {
            char.src = characters[1];
        })
        characterEq.src = characters[1]
        playerStats.playerStats.character = 'Kirito';
        render.renderPlayerStats();
        skinsToBuy.setSkisToKirito();
        skinsToBuy.setAddEventListenerOnSkins();

        shopSpanName.textContent = 'kirito';
        shopSpantxt.textContent = 'chciał';
        text5.textContent = 'pewny';

        const container = document.createElement('div');
        container.classList.add('single-skin');
        container.setAttribute('data-name', 'Kirito');
        container.setAttribute('data-imgID', 16);
        container.style.border = '2px solid #ffb700'
        const img = document.createElement('img');
        img.src = characters[1];
        const span = document.createElement('span');
        span.classList.add('skin-span');
        span.textContent = `Kirito`

        availableSkins.append(container);
        container.append(img);
        container.append(span);
        asunaKirito = 1;

        instAll.classList.remove('unactive');
        audio.src = 'mp3/welcome.mp3';

        startTime = (date.getTime() / 1000).toFixed() * 1;
    }
    openSkins() {
        articleSkins.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    openStatistics() {
        articleStatistics.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    openEquipment() {
        articleEquipment.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    openAchievements() {
        articleAchievements.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
    openUpgrade() {
        articleUpgrade.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
        upgradingItemImg.src = 'img/nothing.png';
        choosedItemsToUpgrade.forEach(item => {
            item.style.border = `2px solid blueviolet`
        })
        acceptCurtain.style.display = 'block';
    }
    openArtifacts() {
        articleArtifacts.classList.add('active');
        articleCurtain.classList.add('active');
        audioEfects.src = 'mp3/clickClose.mp3';
    }
}

const move = new Move();


const back0 = function () {
    move.back(0);
}
const back1 = function () {
    move.back(1);
}
const back2 = function () {
    move.back(2);
}

document.querySelector('div.home-back img').addEventListener('click', back0);
document.querySelector('div.home-back img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.shop-back img').addEventListener('click', back1);
document.querySelector('div.shop-back img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.battle-field-back img').addEventListener('click', back2);
document.querySelector('div.battle-field-back img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.battle img').addEventListener('click', move.goBattle);
document.querySelector('div.house img').addEventListener('click', move.goHome);
document.querySelector('div.item-shop img').addEventListener('click', move.goShop);


document.querySelector('div.asuna-img img').addEventListener('click', move.chooseAsuna.bind(move));
document.querySelector('div.kirito-img img').addEventListener('click', move.chooseKirito.bind(move));


document.querySelector('div.option.moob').addEventListener('click', move.goFightMoob);
document.querySelector('div.option.dungeon').addEventListener('click', move.goFightDungeon);
document.querySelector('div.option.boss').addEventListener('click', move.goFightBoss);

document.querySelector('div.skins-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.skins-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.statistics-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.statistics-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.equipment-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.equipment-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.achievements-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.achievements-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.upgrade-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.upgrade-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
document.querySelector('div.artifacts-close img').addEventListener('click', move.closeArticle);
document.querySelector('div.artifacts-close img').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});

document.querySelector('div.lvl-close img').addEventListener('click', move.closeLvl);
const iksy = [...document.querySelectorAll('div.fight-close img')].forEach(x => {
    x.addEventListener('click', move.closeFight);
    x.addEventListener('mouseenter', function () {
        audioEfects.src = 'mp3/clickSkin.mp3';
    })
})

document.querySelector('div.skins').addEventListener('click', move.openSkins);
document.querySelector('div.skins').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});
document.querySelector('div.statistics').addEventListener('click', move.openStatistics);
document.querySelector('div.statistics').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});
document.querySelector('div.equipment').addEventListener('click', move.openEquipment);
document.querySelector('div.equipment').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});
document.querySelector('div.achievements').addEventListener('click', move.openAchievements);
document.querySelector('div.achievements').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});
document.querySelector('div.upgrade').addEventListener('click', move.openUpgrade);
document.querySelector('div.upgrade').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});
document.querySelector('div.artifacts').addEventListener('click', move.openArtifacts);
document.querySelector('div.artifacts').addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3'
});






//  KLASA SAMOUCZEK  //


const instAll = document.querySelector('div.instruction-all');
const instShop = document.querySelector('div.instruction-shop');
const instHome = document.querySelector('div.instruction-home');
const instBattle = document.querySelector('div.instruction-battle');

const instAllClose = document.querySelector('div.instruction-all div.instruction-close img');
const instShopClose = document.querySelector('div.instruction-shop div.instruction-close img');
const instHomeClose = document.querySelector('div.instruction-home div.instruction-close img');
const instBattleClose = document.querySelector('div.instruction-battle div.instruction-close img');

const instHomeNext = document.querySelector('div.instruction-home div.instruction-next img');
const instBattleNext = document.querySelector('div.instruction-battle div.instruction-next img');

const instBattleOverall = document.querySelector('div.instruction-home div.instruction-homeoverall');
const instBattleMoob = document.querySelector('div.instruction-home div.instruction-homeoverall');
const instBattleDungeon = document.querySelector('div.instruction-home div.instruction-homeoverall');
const instBattleBoss = document.querySelector('div.instruction-home div.instruction-homeoverall');

const instHomeAll = [...document.querySelectorAll('div.instruction-home div.inst')];
const instBattleAll = [...document.querySelectorAll('div.instruction-battle div.inst')];

const instShopCurtain = document.querySelector('div.inst-shop-curtain');
const instHomeCurtain = document.querySelector('div.inst-home-curtain');
const instBattleCurtain = document.querySelector('div.inst-battle-curtain');


let instHomeID = 0;
let instBattleID = 0;


const dotsHome = [...document.querySelectorAll('div.instruction-home div.dots')];
dotsHome.forEach(dot => {
    dot.addEventListener('click', function () {
        dotsHome.forEach(dott => {
            dott.classList.remove('active');
        })
        instHomeAll.forEach(inst => {
            inst.classList.remove('active')
        })
        this.classList.add('active');
        const dotID = this.getAttribute('data-id');
        const instID = document.querySelector('div.instruction-home').querySelector(`div[data-key="${dotID}"]`);
        instID.classList.add('active');
        instHomeID = dotID * 1 - 1;
        audioEfects.src = 'mp3/clickClose.mp3';
    })
});

const dotsBattle = [...document.querySelectorAll('div.instruction-battle div.dots')];
dotsBattle.forEach(dot => {
    dot.addEventListener('click', function () {
        dotsBattle.forEach(dott => {
            dott.classList.remove('active');
        })
        instBattleAll.forEach(inst => {
            inst.classList.remove('active')
        })
        this.classList.add('active');
        const dotID = this.getAttribute('data-id');
        const instID = document.querySelector('div.instruction-battle').querySelector(`div[data-key="${dotID}"]`);
        instID.classList.add('active');
        instBattleID = dotID * 1 - 1;
        audioEfects.src = 'mp3/clickClose.mp3';
    })
});




instHomeNext.addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
instHomeNext.addEventListener('click', function () {
    if (instHomeID <= 5) {
        const idKey = instHomeID + 2;
        dotsHome.forEach(dott => {
            dott.classList.remove('active');
        })
        instHomeAll.forEach(inst => {
            inst.classList.remove('active')
        })
        const dotNext = document.querySelector('div.instruction-home').querySelector(`div[data-id="${idKey}"]`);
        dotNext.classList.add('active');
        const instNext = document.querySelector('div.instruction-home').querySelector(`div[data-key="${idKey}"]`);
        instNext.classList.add('active');
        instHomeID++;
        audioEfects.src = 'mp3/clickClose.mp3';
    }
});

instBattleNext.addEventListener('mouseenter', function () {
    audioEfects.src = 'mp3/clickSkin.mp3';
});
instBattleNext.addEventListener('click', function () {
    if (instBattleID <= 2) {
        const idKey = instBattleID + 2;
        dotsBattle.forEach(dott => {
            dott.classList.remove('active');
        })
        instBattleAll.forEach(inst => {
            inst.classList.remove('active')
        })
        const dotNext = document.querySelector('div.instruction-battle').querySelector(`div[data-id="${idKey}"]`);
        dotNext.classList.add('active');
        const instNext = document.querySelector('div.instruction-battle').querySelector(`div[data-key="${idKey}"]`);
        instNext.classList.add('active');
        instBattleID++;
        audioEfects.src = 'mp3/clickClose.mp3';
    }
});




instAllClose.addEventListener('click', function () {
    instAll.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
    audio.src = 'mp3/start.mp3';
    sectionStartCurtain.classList.remove('active');
});
instShopClose.addEventListener('click', function () {
    instShop.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
});
instHomeClose.addEventListener('click', function () {
    instHome.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
    instHomeCurtain.style.display = 'none';
});
instBattleClose.addEventListener('click', function () {
    instBattle.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
    instBattleCurtain.style.display = 'none';
});

const instCloses = [instAllClose, instShopClose, instBattleClose, instHomeClose];
instCloses.forEach(close => {
    close.addEventListener('mouseenter', function () {
        audioEfects.src = 'mp3/clickSkin.mp3'
    })
})

const startItem = document.querySelector('div.start-item');
const startItemButton = document.querySelector('div.start-item-thanks');


startItemButton.addEventListener('click', function () {
    instShopCurtain.style.display = 'none';
    startItem.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';

    const div = document.createElement('div');
    div.classList.add('eq-item');
    div.setAttribute('data-index', 14);
    div.setAttribute('data-name', 'drewniany miecz treningowy');
    div.setAttribute('data-atk', 1);
    div.setAttribute('data-crit', 0);
    div.setAttribute('data-imgID', 10);
    const img = document.createElement('img');
    img.src = itemsImages[10];
    const span = document.createElement('span');
    span.classList.add('eq-desc');
    span.innerHTML = `<span class="sword-name2">drewniany miecz treningowy</span>Atak : <span class="atk">1</span><br>Cios Krytyczny: <span class="crit">0</span><span class="color-red">%</span>`;
    itemsEqContainer.append(div);
    div.append(img);
    div.append(span);
    eq.setEquipment();
    statistics.weaponsBoughtValue();
    achievements.weaponsAch();

    const div2 = document.createElement('div');
    div2.classList.add('upgrade-item');
    div2.setAttribute('data-index', 14);
    div2.setAttribute('data-name', 'drewniany miecz treningowy');
    div2.setAttribute('data-atk', 1);
    div2.setAttribute('data-crit', 0);
    div2.setAttribute('data-imgID', 10);
    const img2 = document.createElement('img');
    img2.src = itemsImages[10];
    const span2 = document.createElement('span');
    span2.classList.add('upgrade-desc');
    span2.innerHTML = `<span class="sword-name2">drewniany miecz treningowy</span>Atak : <span class="atk">1</span><br>Cios Krytyczny: <span class="crit">0</span><span class="color-red">%</span>`;
    upgradeContainer.append(div2);
    div2.append(img2);
    div2.append(span2);
    upgrade.setUpgradeEventListener();
})







//  KLASA TESTOWA  //
let asunaKirito = '';
const itemsEqContainer = document.querySelector('.eq-equipment');
const upgradeContainer = document.querySelector('div.upgrade-container');
let itemToMove = '';
let skinToMove = '';
let artifactToMove = '';

class Test {
    pushItemToEq() {
        const div = document.createElement('div');
        div.classList.add('eq-item');
        div.setAttribute('data-index', itemToMove.index);
        div.setAttribute('data-name', itemToMove.name);
        div.setAttribute('data-atk', itemToMove.atack);
        div.setAttribute('data-crit', itemToMove.crit);
        div.setAttribute('data-imgID', itemToMove.imgID);
        div.addEventListener('mouseenter', function () {
            //            audioEfects.src = 'mp3/clickSkin.mp3';
        });
        const img = document.createElement('img');
        img.src = itemsImages[itemToMove.imgID];
        const span = document.createElement('span');
        span.classList.add('eq-desc');
        span.innerHTML = `<span class="sword-name2">${itemToMove.name}</span>Atak : <span class="atk">${itemToMove.atack}</span><br>Cios Krytyczny: <span class="crit">${itemToMove.crit}</span><span class="color-red">%</span>`
        itemsEqContainer.append(div);
        div.append(img);
        div.append(span);
        eq.setEquipment();
        statistics.weaponsBoughtValue();
        achievements.weaponsAch();
    }
    pushItemToUpgrade() {
        const div = document.createElement('div');
        div.classList.add('upgrade-item');
        div.setAttribute('data-index', itemToMove.index);
        div.setAttribute('data-name', itemToMove.name);
        div.setAttribute('data-atk', itemToMove.atack);
        div.setAttribute('data-crit', itemToMove.crit);
        div.setAttribute('data-imgID', itemToMove.imgID);
        div.addEventListener('mouseenter', function () {
            //            audioEfects.src = 'mp3/clickSkin.mp3';
        });
        const img = document.createElement('img');
        img.src = itemsImages[itemToMove.imgID];
        const span = document.createElement('span');
        span.classList.add('upgrade-desc');
        span.innerHTML = `<span class="sword-name2">${itemToMove.name}</span>Atak : <span class="atk">${itemToMove.atack}</span><br>Cios Krytyczny: <span class="crit">${itemToMove.crit}</span><span class="color-red">%</span>`
        upgradeContainer.append(div);
        div.append(img);
        div.append(span);
        upgrade.setUpgradeEventListener();
    }
    pushSkinToEq() {
        const container = document.createElement('div');
        container.classList.add('single-skin');
        container.setAttribute('data-imgID', skinToMove.imgID);
        container.setAttribute('data-name', skinToMove.name);
        container.addEventListener('mouseenter', function () {
            //            audioEfects.src = 'mp3/clickSkin.mp3';
        });

        const img = document.createElement('img');
        audioEfects2.src = 'mp3/buyItem.mp3';
        if (asunaKirito == 0) {
            img.src = imgSkinsToAsuna[skinToMove.imgID];
            const span = document.createElement('span');
            span.textContent = skinToMove.name;
            availableSkins.append(container);
            container.append(img);
            container.append(span);
        } else if (asunaKirito == 1) {
            img.src = imgSkinsToKirito[skinToMove.imgID];
            const span = document.createElement('span');
            span.textContent = skinToMove.name;
            availableSkins.append(container);
            container.append(img);
            container.append(span);
        }

        statistics.skinsBoughtValue();
        achievements.skinsAch();
    }
    pushArtifactToEq() {
        const div = document.createElement('div');
        div.classList.add('single-artifact');
        div.setAttribute('data-name', artifactToMove.name);
        div.setAttribute('data-atk', artifactToMove.atack);
        div.setAttribute('data-crit', artifactToMove.crit);
        div.setAttribute('data-imgID', artifactToMove.imgID);
        div.addEventListener('mouseenter', function () {
            //            audioEfects.src = 'mp3/clickSkin.mp3';
        });
        const divImg = document.createElement('div');
        divImg.classList.add('single-artifact-img')
        const img = document.createElement('img');
        img.src = allArtifactsImg[artifactToMove.imgID];
        const p = document.createElement('p');
        p.innerHTML = `<span class="artifact-name">${artifactToMove.name}</span>Atak : <span class="artifact-atk">${artifactToMove.attack}</span><br>Cios Krytyczny : <span class="artifact-crit">${artifactToMove.crit}</span><span class="color-red">%</span>`

        artifactsToMoveContainer.append(div);
        div.append(divImg);
        divImg.append(img);
        div.append(p);
    }
    moneyAnimation() {
        visualMoney.animate([
            {
                color: 'red'
            },
            {
                color: 'white'
            }
        ], 300);
    }
    moneyAnimationGain() {
        visualMoney.animate([
            {
                color: 'green'
            },
            {
                color: 'white'
            }
        ], 300);
    }
}

const test = new Test();

//  KLASA WSZYSTKICH ITEMKÓW  //


const itemsImages = ['img/miecz1.png', 'img/miecz2.png', 'img/miecz3.png', 'img/miecz4.png', 'img/miecz5.png', 'img/miecz6.png', 'img/miecz7.png', 'img/miecz8.png', 'img/miecz9.png', 'img/miecz10.png', 'img/miecz11.png', 'img/miecz12.png', 'img/miecz13.png', 'img/miecz14.png', 'img/miecz15.png', 'img/miecz16.png'];

class Items {
    constructor(index, name, atack, crit, ID, prize) {
        this.stats = {
            index: index,
            name: name,
            atack: atack,
            crit: crit,
            imgID: ID,
            prize: prize
        }
    }
}


const item1 = new Items(0, "Niebiańskie Ostrze", 2, 0, 0, 10);
const item2 = new Items(1, "Ostrze Czarnego Szermierza", 4, 0, 1, 500);
const item3 = new Items(2, "Miecz Zaklętej Duszy", 10, 0, 2, 5000);
const item4 = new Items(4, "Podmuch Arktycznego Mrozu", 18, 1, 4, 10000);
const item5 = new Items(10, "Cięcie Lotosu", 25, 2, 11, 15000);
const item6 = new Items(12, "Szmaragdowe Ostrze Chaosu", 35, 0, 12, 20000);
const item7 = new Items(8, "Pogarda Ważki", 50, 2, 8, 40000);
const item8 = new Items(6, "Wyrok Piekielnego Ognia", 70, 2, 6, 70000);
const item9 = new Items(9, "Ametystowy Kwiat Róży", 100, 0, 9, 100000);
const item10 = new Items(5, "Ostrze Mrocznej Trójcy", 135, 2, 5, 140000);
const item11 = new Items(7, "Karmazynowy Floret", 180, 4, 7, 175000);
const item12 = new Items(13, "Ostrze Nieumarłych", 230, 0, 13, 210000);
const item13 = new Items(3, "Excalibur", 280, 2, 3, 250000);
const item14 = new Items(13, "Ostrze Lazurowego Zniszczenia", 345, 5, 14, 1000000);
const item15 = new Items(14, "Drewniany Miecz Treningowy", 1, 0, 10, 0);





//  KLASA EXP  //


class Exp {
    checkLvl(exp) {
        if (actualEXP + exp >= allLVLS[actualLVL - 1].neededExpToLvlUp) {
            lvlI++;
            attackFromLVL = allLVLS[lvlI].lvlAttack;
            testlvl.changeLvl();
        } else {
            this.addExp(exp);
        }
    }
    addExp(exp) {
        actualEXP = actualEXP + exp;
        render.renderPlayerStats();
    }
    resetExp() {
        actualEXP = 0;
    }
}

const exp = new Exp();


//  KLASA LVL  //



class Lvl {
    constructor(exp, attack, moobHP, dungeonHP, lvl, upgradePrise, rewardMoob, rewardDungeon) {
        this.lvlProperties = {
            neededExpToLvlUp: exp,
            lvlAttack: attack,
            moobHP: moobHP,
            dungeonHP: dungeonHP,
            lvl: lvl,
            upgradePrise: upgradePrise,
            rewardMoob: rewardMoob,
            rewardDungeon: rewardDungeon
        }
    }
    changeLvl() {
        actualLvlObject = allLVLS[lvlI];
        actualLVL = actualLvlObject.lvl;
        characterEqLvl.textContent = actualLVL;
        exp.resetExp();
        upgradesPrise = actualLvlObject.upgradePrise;
        upgradesPriseSpan.textContent = actualLvlObject.upgradePrise
        moobStats.hp = actualLvlObject.moobHP;
        moobStats.rewardValue = actualLvlObject.rewardMoob;
        dungeonStats.hp = actualLvlObject.dungeonHP;
        dungeonStats.rewardValue = actualLvlObject.rewardDungeon;
        render.renderPlayerStats();
        lvlInformation.style.display = 'block';
        lvlCurtain.style.display = 'block';
        lvlInformationSpan.textContent = actualLVL;
        audioEfects.src = 'mp3/lvlUp.mp3';
        statistics.lvlEarnedValue();
        achievements.lvlAch();
    }
}

const testlvl = new Lvl(0, 0, 0, 0, 0, 1000, 0, 0);
const lvl1 = new Lvl(50, 0, 40, 400, 1, 1000, 4, 24);
const lvl2 = new Lvl(50, 2, 144, 1280, 2, 1000, 12, 130);
const lvl3 = new Lvl(50, 3, 180, 1600, 3, 1000, 20, 216);
const lvl4 = new Lvl(50, 4, 288, 2560, 4, 1000, 28, 304);
const lvl5 = new Lvl(50, 5, 357, 3168, 5, 1000, 36, 390);
const lvl6 = new Lvl(50, 6, 792, 7040, 6, 2750, 66, 792);
const lvl7 = new Lvl(50, 7, 945, 8448, 7, 2750, 78, 936);
const lvl8 = new Lvl(50, 8, 990, 8800, 8, 2750, 90, 1080);
const lvl9 = new Lvl(50, 9, 1026, 9152, 9, 2750, 102, 1224);
const lvl10 = new Lvl(50, 10, 1296, 11520, 10, 2750, 114, 1368);
const lvl11 = new Lvl(50, 11, 1773, 15744, 11, 4000, 168, 2120);
const lvl12 = new Lvl(50, 12, 1818, 16128, 12, 4000, 184, 2320);
const lvl13 = new Lvl(50, 13, 2070, 18432, 13, 4000, 200, 2520);
const lvl14 = new Lvl(50, 14, 2115, 18816, 14, 4000, 216, 2720);
const lvl15 = new Lvl(50, 15, 2340, 20800, 15, 4000, 232, 2920);
const lvl16 = new Lvl(50, 16, 3204, 28288, 16, 6000, 310, 4092);
const lvl17 = new Lvl(50, 17, 3240, 28704, 17, 6000, 330, 4356);
const lvl18 = new Lvl(50, 18, 3285, 29120, 18, 6000, 350, 4620);
const lvl19 = new Lvl(50, 19, 3330, 29536, 19, 6000, 370, 4884);
const lvl20 = new Lvl(50, 20, 3600, 32256, 20, 6000, 390, 5148);
const lvl21 = new Lvl(50, 21, 4185, 37184, 21, 8000, 492, 6790);
const lvl22 = new Lvl(50, 22, 4383, 38976, 22, 8000, 516, 7120);
const lvl23 = new Lvl(50, 23, 4437, 39424, 23, 8000, 540, 7452);
const lvl24 = new Lvl(50, 24, 4500, 39872, 24, 8000, 564, 7784);
const lvl25 = new Lvl(50, 25, 5130, 45600, 25, 8000, 588, 8114);
const lvl26 = new Lvl(50, 26, 5724, 50880, 26, 11000, 714, 10282);
const lvl27 = new Lvl(50, 27, 5778, 51360, 27, 11000, 742, 10684);
const lvl28 = new Lvl(50, 28, 5832, 51840, 28, 11000, 770, 11088);
const lvl29 = new Lvl(50, 29, 5886, 52320, 29, 11000, 798, 11492);
const lvl30 = new Lvl(50, 30, 7776, 69120, 30, 11000, 826, 11896);
const lvl31 = new Lvl(50, 31, 8415, 74752, 31, 16000, 976, 14640);
const lvl32 = new Lvl(50, 32, 8469, 75264, 32, 16000, 1008, 15120);
const lvl33 = new Lvl(50, 33, 9405, 83456, 33, 16000, 1040, 15600);
const lvl34 = new Lvl(50, 34, 9450, 83968, 34, 16000, 1072, 16080);
const lvl35 = new Lvl(50, 35, 10098, 89760, 35, 16000, 1104, 16560);
const lvl36 = new Lvl(50, 36, 10800, 95744, 36, 21000, 1278, 19930);
const lvl37 = new Lvl(50, 37, 12690, 112608, 37, 21000, 1314, 20498);
const lvl38 = new Lvl(50, 38, 12735, 113152, 38, 21000, 1350, 21060);
const lvl39 = new Lvl(50, 39, 12798, 113696, 39, 21000, 1386, 21622);
const lvl40 = new Lvl(50, 40, 16848, 149760, 40, 21000, 1422, 22184);
const lvl41 = new Lvl(50, 41, 17568, 156096, 41, 28000, 1620, 26244);
const lvl42 = new Lvl(50, 42, 17640, 156672, 42, 28000, 1660, 26892);
const lvl43 = new Lvl(50, 43, 17750, 186048, 43, 28000, 1700, 27540);
const lvl44 = new Lvl(50, 44, 18000, 186624, 44, 28000, 1740, 28188);
const lvl45 = new Lvl(50, 45, 22230, 197600, 45, 28000, 1780, 28418);
const lvl46 = new Lvl(50, 46, 22995, 204288, 46, 38000, 2184, 36692);
const lvl47 = new Lvl(50, 47, 23085, 204896, 47, 38000, 2232, 37498);
const lvl48 = new Lvl(50, 48, 23130, 205504, 48, 38000, 2280, 38304);
const lvl49 = new Lvl(50, 49, 23220, 206112, 49, 38000, 2328, 39110);
const lvl50 = new Lvl(Infinity, 50, 30000, 300000, 50, 60000, 3000, 60000);


const allLVLS = [lvl1.lvlProperties, lvl2.lvlProperties, lvl3.lvlProperties, lvl4.lvlProperties, lvl5.lvlProperties, lvl6.lvlProperties, lvl7.lvlProperties, lvl8.lvlProperties, lvl9.lvlProperties, lvl10.lvlProperties, lvl11.lvlProperties, lvl12.lvlProperties, lvl13.lvlProperties, lvl14.lvlProperties, lvl15.lvlProperties, lvl16.lvlProperties, lvl17.lvlProperties, lvl18.lvlProperties, lvl19.lvlProperties, lvl20.lvlProperties, lvl21.lvlProperties, lvl22.lvlProperties, lvl23.lvlProperties, lvl24.lvlProperties, lvl25.lvlProperties, lvl26.lvlProperties, lvl27.lvlProperties, lvl28.lvlProperties, lvl29.lvlProperties, lvl30.lvlProperties, lvl31.lvlProperties, lvl32.lvlProperties, lvl33.lvlProperties, lvl34.lvlProperties, lvl35.lvlProperties, lvl36.lvlProperties, lvl37.lvlProperties, lvl38.lvlProperties, lvl39.lvlProperties, lvl40.lvlProperties, lvl41.lvlProperties, lvl42.lvlProperties, lvl43.lvlProperties, lvl44.lvlProperties, lvl45.lvlProperties, lvl46.lvlProperties, lvl47.lvlProperties, lvl48.lvlProperties, lvl49.lvlProperties, lvl50.lvlProperties]



//  KLASA SATYSTYKI GRACZA  //


let playerLVL = document.querySelector('section.player-statistics p.lvl span');
let playerEXP = document.querySelector('section.player-statistics p.exp span');
let playerMONEY = document.querySelector('section.player-statistics p.money span');
let playerATK = document.querySelector('section.player-statistics p.atack span');
let playerCRIT = document.querySelector('section.player-statistics p.crit span');
let playerCHARACTER = document.querySelector('section.player-statistics p.character');


let lvlI = 0;

let actualLvlObject = allLVLS[lvlI];
let actualLVL = actualLvlObject.lvl;
let actualEXP = 0;
let attackFromLVL = allLVLS[lvlI].lvlAttack;
let attackFromWEAPON = 0;
let attackFromARTIFACT = 0;
let criticalFromWEAPON = 0;
let criticalFromARTIFACT = 0;


class PlayerStats {
    constructor(character, skin, lvl, experience, money, atack, critical) {
        this.playerStats = {
            character: character,
            skin: skin,
            lvl: lvl,
            experience: experience,
            money: money,
            atack: atack,
            critical: critical
        }
    }
}

const playerStats = new PlayerStats('Kirito', characters[0], 1, 0, 0, 0, 0);


//  KLASA RENDER  //

class Render {
    renderPlayerStats() {

        playerStats.playerStats.lvl = actualLVL;
        playerStats.playerStats.experience = `${actualEXP}/${actualLvlObject.neededExpToLvlUp}`;
        playerStats.playerStats.atack = attackFromLVL + attackFromWEAPON + attackFromARTIFACT;
        playerStats.playerStats.critical = criticalFromWEAPON + criticalFromARTIFACT;


        playerLVL.textContent = playerStats.playerStats.lvl;
        playerEXP.textContent = playerStats.playerStats.experience;
        playerMONEY.textContent = playerStats.playerStats.money;
        playerATK.textContent = playerStats.playerStats.atack;
        playerCRIT.textContent = playerStats.playerStats.critical;
        playerCHARACTER.textContent = playerStats.playerStats.character;


        if (actualLvlObject.lvl == 50) {
            playerEXP.innerHTML = `${actualEXP}/<span style="font-size: 2vw; line-height: 1.5vw">&infin;</span>`;
        }
    }
}

const render = new Render();

//  KLASA SKINY  //

const imgSkinsToAsuna = ['img/asuna.png', 'img/asuna2.png', 'img/asuna3.png', 'img/asuna4.png', 'img/asuna5.png', 'img/asuna6.png', 'img/asuna7.png', 'img/asuna8.png', 'img/asuna9.png', 'img/asuna10.png', 'img/asuna11.png', 'img/asuna12.png', 'img/asuna13.png', 'img/asuna14.png', 'img/asuna15.png', 'img/asuna16.png', 'img/asuna17.png', 'img/asuna18.png', 'img/asuna19.png', 'img/asuna20.png', 'img/asuna21.png', 'img/asuna22.png', 'img/asuna23.png'];



const imgSkinsToKirito = ['img/kirito.png', 'img/kirito2.png', 'img/kirito3.png', 'img/kirito4.png', 'img/kirito5.png', 'img/kirito6.png', 'img/kirito7.png', 'img/kirito8.png', 'img/kirito9.png', 'img/kirito10.png', 'img/kirito11.png', 'img/kirito12.png', 'img/kirito13.png', 'img/kirito14.png', 'img/kirito15.png', 'img/kirito16.png', 'img/kirito17.png', 'img/kirito18.png', 'img/kirito19.png', 'img/kirito20.png', 'img/kirito21.png', 'img/kirito22.png', 'img/kirito23.png', 'img/kirito24.png', 'img/kirito25.png'];

class Skins {
    constructor(imgID, name, prize) {
        this.skin = {
            imgID: imgID,
            name: name,
            prize: prize
        }
    }
}

const skinK1 = new Skins(0, 'Czarny Szermierz Kirito', 1000);
const skinK2 = new Skins(1, 'ALfheim Kirito', 1000);
const skinK3 = new Skins(10, 'Kirito Basebolista', 1000);
const skinK4 = new Skins(12, 'Kirito Wracający z Frontu', 1000);
const skinK5 = new Skins(15, 'Kirito Rubinowy Pas', 1000);
const skinK6 = new Skins(18, 'Elf Kirito', 1000);
const skinK7 = new Skins(23, 'Bojowy Elf Kirito', 1000);
const skinK8 = new Skins(2, 'Kirito Podwójny szał', 10000);
const skinK9 = new Skins(4, 'Kirito w Czarnym Płaszczu', 10000);
const skinK10 = new Skins(7, 'Waleczny Kirito', 10000);
const skinK11 = new Skins(21, 'Ordinal Scale Kirito', 10000);
const skinK12 = new Skins(9, 'Kirito z Zakonu Czerwonej Róży', 30000);
const skinK13 = new Skins(13, 'Kirito Błękitnej Szarży', 30000);
const skinK14 = new Skins(17, 'Szlachetny Kirito', 30000);
const skinK15 = new Skins(19, 'Gun Gale Kirito', 30000);
const skinK16 = new Skins(24, 'Kirito Prędkości światła', 30000);
const skinK17 = new Skins(6, 'Kirito Wirujących Ostrzy', 100000);
const skinK18 = new Skins(8, 'Kirito Demonicznego Wiatru', 100000);
const skinK19 = new Skins(11, 'Kirito Magicznego Cięcia', 100000);
const skinK20 = new Skins(20, 'Kirito Zakonu Feniksa', 100000);
const skinK21 = new Skins(22, 'Cybernetyczny Kirito', 100000);
const skinK22 = new Skins(3, 'Immortal Object Kirito', 500000);
const skinK23 = new Skins(5, 'Kirito Burzowego Ostrza', 500000);
const skinK24 = new Skins(14, 'Kirito Ognisty Jedi', 500000);







const skinA1 = new Skins(8, 'Przywódca Frontu Asuna', 1000);
const skinA2 = new Skins(12, 'Stanowcza Asuna', 1000);
const skinA3 = new Skins(13, 'Przyjazna Asuna', 1000);
const skinA4 = new Skins(7, 'Asuna Valkirie', 10000);
const skinA5 = new Skins(9, 'Czarny Szermierz Asuna', 10000);
const skinA6 = new Skins(11, 'Perska Asuna', 10000);
const skinA7 = new Skins(15, 'Asuna Bezpiecznej Aury', 10000);
const skinA8 = new Skins(16, 'Balowa Asuna', 10000);
const skinA9 = new Skins(0, 'Szlachetna Asuna', 30000);
const skinA10 = new Skins(10, 'Anielska Asuna', 30000);
const skinA11 = new Skins(17, 'Asuna Straży Królewskiej', 30000);
const skinA12 = new Skins(18, 'Asuna z Akademii Bojowej', 30000);
const skinA13 = new Skins(20, 'Asuna Granger', 30000);
const skinA14 = new Skins(1, 'Szybki Elf Asuna', 100000);
const skinA15 = new Skins(2, 'Asuna Ognistego Żaru', 100000);
const skinA16 = new Skins(3, 'Czarująca Asuna', 100000);
const skinA17 = new Skins(5, 'Asuna Jedi', 100000);
const skinA18 = new Skins(21, 'Uwodzicielka Asuna', 100000);
const skinA19 = new Skins(22, 'Czerwona Kokardka Asuna', 100000);
const skinA20 = new Skins(4, 'Basenowa Asuna', 500000);
const skinA21 = new Skins(6, 'Asuna Sprawiedliwej Ręki', 500000);
const skinA22 = new Skins(14, 'Asuna Zakonu Feniksa', 500000);




let availableSkins = document.querySelector('div.available-skins div.skins-container');
const skinsToBuyContainer = document.querySelector('div.skins-to-buy div.skins-container');

const skinsToAsuna = [skinA1.skin, skinA2.skin, skinA3.skin, skinA4.skin, skinA5.skin, skinA6.skin, skinA7.skin, skinA8.skin, skinA9.skin, skinA10.skin, skinA11.skin, skinA12.skin, skinA13.skin, skinA14.skin, skinA15.skin, skinA16.skin, skinA17.skin, skinA18.skin, skinA19.skin, skinA20.skin, skinA21.skin, skinA22.skin]

const skinsToKirito = [skinK1.skin, skinK2.skin, skinK3.skin, skinK4.skin, skinK5.skin, skinK6.skin, skinK7.skin, skinK8.skin, skinK9.skin, skinK10.skin, skinK11.skin, skinK12.skin, skinK13.skin, skinK14.skin, skinK15.skin, skinK16.skin, skinK17.skin, skinK18.skin, skinK19.skin, skinK20.skin, skinK21.skin, skinK22.skin, skinK23.skin, skinK24.skin]

class SkinsToBuy {
    setSkisToAsuna() {
        skinsToAsuna.forEach(skin => {
            const container = document.createElement('div');
            container.classList.add('single-skin');
            container.setAttribute('data-imgID', skin.imgID);
            container.setAttribute('data-name', skin.name);
            container.setAttribute('data-prize', skin.prize);
            container.addEventListener('mouseenter', function () {
                //                audioEfects.src = 'mp3/clickSkin.mp3';
            });
            const img = document.createElement('img');
            img.src = imgSkinsToAsuna[skin.imgID];
            const button = document.createElement('button');
            button.classList.add('buy-skin');
            button.textContent = `Kup za ${skin.prize}`
            const span = document.createElement('span');
            span.classList.add('skin-span');
            span.textContent = `${skin.name}`

            skinsToBuyContainer.append(container);
            container.append(img);
            container.append(button);
            container.append(span);
        })
    }
    setSkisToKirito() {
        skinsToKirito.forEach(skin => {
            const container = document.createElement('div');
            container.classList.add('single-skin');
            container.setAttribute('data-imgID', skin.imgID);
            container.setAttribute('data-name', skin.name);
            container.setAttribute('data-prize', skin.prize);
            const img = document.createElement('img');
            img.src = imgSkinsToKirito[skin.imgID];
            const button = document.createElement('button');
            button.classList.add('buy-skin');
            button.textContent = `Kup za ${skin.prize}`
            const span = document.createElement('span');
            span.classList.add('skin-span');
            span.textContent = `${skin.name}`

            skinsToBuyContainer.append(container);
            container.append(img);
            container.append(button);
            container.append(span);
        })
    }
    setAddEventListenerOnSkins() {
        const skinsToBuyContainerArray = [...skinsToBuyContainer.children];
        skinsToBuyContainerArray.forEach(skin => {
            skin.addEventListener('click', function () {
                if (playerStats.playerStats.money >= this.getAttribute('data-prize') * 1) {

                    const skinBought = {
                        name: '',
                        imgID: '',
                        prize: ''
                    }


                    skinBought.name = this.getAttribute('data-name');
                    skinBought.imgID = this.getAttribute('data-imgID');
                    skinBought.prize = this.getAttribute('data-prize');
                    skinToMove = skinBought;
                    test.pushSkinToEq();
                    this.style.display = 'none';

                    playerStats.playerStats.money -= skinBought.prize * 1;
                    test.moneyAnimation();
                    render.renderPlayerStats();
                    skinsToBuy.changeSkin();
                } else {
                    notEnoughtMoney.style.display = 'block';
                }
            })
        })
    }
    changeSkin() {
        let skinsToChoose = availableSkins;
        skinsToChoose = [...document.querySelector('div.available-skins div.skins-container').children];
        skinsToChoose.forEach(skin => {
            skin.addEventListener('click', function () {
                skinsToChoose.forEach(skin => {
                    skin.style.border = `2px solid blueviolet`
                })
                this.style.border = `2px solid #ffb700`;
                const choosedSkin = {
                    name: '',
                    imgID: '',
                }
                choosedSkin.name = this.getAttribute('data-name');
                choosedSkin.imgID = this.getAttribute('data-imgID');

                audioEfects.src = 'mp3/clickSkin2.mp3';

                if (asunaKirito == 0) {
                    character.src = imgSkinsToAsuna[choosedSkin.imgID];
                    characterBattle.forEach(char => {
                        char.src = imgSkinsToAsuna[choosedSkin.imgID];
                    })
                    characterEq.src = imgSkinsToAsuna[choosedSkin.imgID];
                } else if (asunaKirito == 1) {
                    character.src = imgSkinsToKirito[choosedSkin.imgID];
                    characterBattle.forEach(char => {
                        char.src = imgSkinsToKirito[choosedSkin.imgID];
                    })
                    characterEq.src = imgSkinsToKirito[choosedSkin.imgID];
                }
            })
        })
    }
}

const skinsToBuy = new SkinsToBuy();






//  KLASA SKLEP  //




const itemsToBuyContainer = document.querySelector('article.items-to-buy div.shop-items');
let itemsToBuy = [item1.stats, item2.stats, item3.stats, item4.stats, item5.stats, item6.stats, item7.stats, item8.stats, item9.stats, item10.stats, item11.stats, item12.stats, item13.stats, item14.stats];



class Shop {
    constructor() {
        this.itemsToBuy();
    }
    itemsToBuy() {
        itemsToBuy.forEach(item => {
            const container = document.createElement('div');
            container.classList.add('shop-item');
            container.setAttribute('data-index', item.index);
            container.setAttribute('data-name', item.name);
            container.setAttribute('data-atk', item.atack);
            container.setAttribute('data-crit', item.crit);
            container.setAttribute('data-imgID', item.imgID);
            container.setAttribute('data-prize', item.prize);
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('shop-item-img');
            const img = document.createElement('img');
            img.src = itemsImages[item.imgID];
            const p = document.createElement('p');
            const descContainer = document.createElement('span');
            descContainer.classList.add('shop-desc');
            const button = document.createElement('button');
            button.classList.add('buy');
            button.textContent = `Kup za ${item.prize}`;
            button.addEventListener('mouseenter', function () {
                //                audioEfects.src = 'mp3/clickSkin.mp3';
            });

            itemsToBuyContainer.append(container);
            container.append(imgContainer);
            imgContainer.append(img);
            container.append(p);
            p.append(descContainer);
            container.append(button);
            descContainer.innerHTML = `<span class="sword-name">${item.name}</span><br>Atak: <span class="atk">${item.atack}</span><br>Cios Krytyczny: <span class="crit">${item.crit}</span><span class="color-red">%</span>`;
            const spanATK = document.querySelector('span.atk');
            const spanCRIT = document.querySelector('span.crit');
        })
    }
}

const shop = new Shop();




const itemsToBuyContainerArray = [...itemsToBuyContainer.getElementsByClassName('buy')];
itemsToBuyContainerArray.forEach(x => {
    x.addEventListener('click', function () {
        if (playerStats.playerStats.money >= this.parentElement.getAttribute('data-prize') * 1) {

            const itemBought = {
                index: '',
                name: '',
                atack: '',
                crit: '',
                imgID: '',
                prize: '',

            }
            itemBought.index = this.parentElement.getAttribute('data-index');
            itemBought.name = this.parentElement.getAttribute('data-name');
            itemBought.atack = this.parentElement.getAttribute('data-atk');
            itemBought.crit = this.parentElement.getAttribute('data-crit');
            itemBought.imgID = this.parentElement.getAttribute('data-imgID');
            itemBought.prize = this.parentElement.getAttribute('data-prize');
            itemToMove = itemBought;
            audioEfects2.src = 'mp3/buyItem.mp3';
            test.pushItemToEq();
            test.pushItemToUpgrade();
            this.parentElement.style.display = 'none';
            playerStats.playerStats.money -= itemBought.prize * 1;
            test.moneyAnimation();

            render.renderPlayerStats();
        } else {
            notEnoughtMoney.style.display = 'block';
        }
    })
})









//  KLASA EKWIPUNEK  //

const weapon = document.querySelector('div.choosed-weapon img');
const weaponSpanAtack = document.querySelector('div.weapon-flex p span.atk');
const weaponSpanCrit = document.querySelector('div.weapon-flex p span.crit');
const weaponName = document.querySelector('div.weapon h2');
let equipment = [];
let yourWeapon = '';




const eqAddEvent = function () {
    equipment.forEach(item => {
        item.style.border = `2px solid blueviolet`
    })
    this.style.border = `2px solid #ffb700`;
    const choosedItem = {
        name: '',
        atack: '',
        crit: '',
        imgID: '',
    }


    choosedItem.name = this.getAttribute('data-name');
    choosedItem.atack = this.getAttribute('data-atk');
    choosedItem.crit = this.getAttribute('data-crit');
    choosedItem.imgID = this.getAttribute('data-imgID');

    weaponSpanAtack.textContent = choosedItem.atack;
    weaponSpanCrit.textContent = choosedItem.crit;
    weaponName.textContent = choosedItem.name;


    attackFromWEAPON = choosedItem.atack * 1;
    criticalFromWEAPON = choosedItem.crit * 1;

    yourWeapon = choosedItem;
    audioEfects.src = 'mp3/equip.mp3';
    eq.changeWeapon();
};



class Eq {
    setEquipment() {
        equipment = [...document.querySelector('div.eq-equipment').getElementsByClassName('eq-item')];
        equipment.forEach(item => {
            item.addEventListener('click', eqAddEvent);
        })
    }
    changeWeapon() {
        weapon.src = itemsImages[yourWeapon.imgID];
        render.renderPlayerStats();
    }
}

const eq = new Eq();









//  KLASA ULEPSZANIA  //


let upgradesPrise = 1000;
let indexItemToUpgrade = '';
let upgradingItemStats = '';
let choosedItemsToUpgrade = '';
let upgradingItemImg = document.querySelector('div.upgrade-choosed-item img');

const UpgradeAddEvent = function () {
    choosedItemsToUpgrade.forEach(item => {
        item.style.border = `2px solid blueviolet`
    })
    this.style.border = `2px solid #ffb700`;
    const choosedItemUpgrade = {
        index: '',
        name: '',
        atack: '',
        crit: '',
        imgID: '',
    }
    choosedItemUpgrade.index = this.getAttribute('data-index');
    choosedItemUpgrade.name = this.getAttribute('data-name');
    choosedItemUpgrade.atack = this.getAttribute('data-atk');
    choosedItemUpgrade.crit = this.getAttribute('data-crit');
    choosedItemUpgrade.imgID = this.getAttribute('data-imgID');

    upgradingItemStats = choosedItemUpgrade;
    upgradingItemImg.src = itemsImages[choosedItemUpgrade.imgID];
    audioEfects.src = 'mp3/equip.mp3';
    acceptCurtain.style.display = 'none';

};


class Upgrade {
    setUpgradeEventListener() {
        choosedItemsToUpgrade = [...document.querySelector('div.upgrade-container').getElementsByClassName('upgrade-item')];
        choosedItemsToUpgrade.forEach(item => {
            item.addEventListener('click', UpgradeAddEvent);
        })
    }
    upgradeItem() {
        if (playerStats.playerStats.money >= upgradesPrise) {
            const item = document.querySelector(`div.upgrade-container div[data-index='${upgradingItemStats.index}']`)
            const itemInEq = document.querySelector(`div.eq-equipment div[data-index='${upgradingItemStats.index}']`)
            let atackValue = item.getAttribute('data-atk') * 1;
            let atackItemInEqValue = itemInEq.getAttribute('data-atk') * 1;
            atackValue++;
            item.setAttribute('data-atk', atackValue);
            itemInEq.setAttribute('data-atk', atackValue);
            const itemSpan = item.querySelector('span.atk');
            itemSpan.textContent = atackValue;
            itemSpan.style.color = '#ff6200';
            const itemInEqSpan = itemInEq.querySelector('span.atk');
            itemInEqSpan.textContent = atackValue;
            itemInEqSpan.style.color = '#ff6200';
            playerStats.playerStats.money -= upgradesPrise;
            test.moneyAnimation();

            equipment.forEach(item => {
                item.style.border = `2px solid blueviolet`
            })
            weaponSpanAtack.textContent = 0;
            weaponSpanCrit.textContent = 0;
            weaponName.textContent = 'Używana Broń';
            weapon.src = 'img/nothing.png';
            attackFromWEAPON = 0;

            audioEfects.src = 'mp3/upgradeItem.mp3';

            statistics.upgradesValue();
            achievements.upgradesAch();

            render.renderPlayerStats();
        } else {
            notEnoughtMoney.style.display = 'block';
        }
    }
}

const upgrade = new Upgrade();


const upgradeAccept = document.querySelector('div.upgrade-accept');
upgradeAccept.addEventListener('click', upgrade.upgradeItem);






//  KLASA ARTEFAKTÓW  //

const artifactsToMoveContainer = document.querySelector('div.artifacts-container');


const allArtifactsImg = ['img/artifact1.png', 'img/artifact2.png', 'img/artifact3.png', 'img/artifact4.png', 'img/artifact5.png', 'img/artifact6.png', 'img/artifact7.png', 'img/artifact8.png', 'img/artifact9.png', 'img/artifact10.png'];


class Artifact {
    constructor(imgID, name, attack, critical) {
        this.artifactStats = {
            imgID: imgID,
            name: name,
            attack: attack,
            critical: critical
        }
    }
    setArtifact() {

    }
}

const artifact1 = new Artifact(0, 'Tarcza Morskich Bogów', 3, 1);
const artifact2 = new Artifact(1, 'Morski Drybling', 7, 1);
const artifact3 = new Artifact(2, 'Smoczy Pancerz', 10, 0);
const artifact4 = new Artifact(3, 'Korona Królewskiego Blasku', 11, 0);
const artifact5 = new Artifact(4, 'Klucz Niebiańskich Bram', 10, 1);
const artifact6 = new Artifact(5, 'Klejnot Narya', 16, 0);
const artifact7 = new Artifact(6, 'Tarcza Świętego Dębu', 7, 5);
const artifact8 = new Artifact(7, 'Buty Posłańca', 20, 0);
const artifact9 = new Artifact(8, 'Rycerski Hełm Sprawiedliwości', 1, 10);
const artifact10 = new Artifact(9, 'żądło', 15, 7);



let allArtifacts = [artifact1.artifactStats, artifact2.artifactStats, artifact3.artifactStats, artifact4.artifactStats, artifact5.artifactStats, artifact6.artifactStats, artifact7.artifactStats, artifact8.artifactStats, artifact9.artifactStats, artifact10.artifactStats]




//  KLASA WALKA  //

const monstersImg = ['img/moob.png', 'img/dungeon.png', 'img/boss.png', 'img/kayaba.png'];


const monsterMoob = document.querySelector('article.moob div.fight-monster-character img');
const monsterDungeon = document.querySelector('article.dungeon div.fight-monster-character img');
const monsterBoss = document.querySelector('article.boss div.fight-monster-character img');


monsterMoob.addEventListener('click', function () {
    this.animate({
        transform: 'scale(0.95) translate(-52%, -52%)'
    }, 100)
})
monsterDungeon.addEventListener('click', function () {
    this.animate({
        transform: 'scale(0.95) translate(-52%, -52%)'
    }, 100)
})
monsterBoss.addEventListener('click', function () {
    this.animate({
        transform: 'scale(0.95) translate(-52%, -52%)'
    }, 100)
})

const monsterCurtainMoob = document.querySelector('article.moob div.fight-monster-character div.monster-curtain');
const monsterCurtainDungeon = document.querySelector('article.dungeon div.fight-monster-character div.monster-curtain');
const monsterCurtainBoss = document.querySelector('article.boss div.fight-monster-character div.monster-curtain');

const goAtackMoob = document.querySelector('article.moob div.fight-start');
//goAtackMoob.addEventListener('mouseenter', function(){
//    audioEfects2.src = 'mp3/clickSkin.mp3';
//})
goAtackMoob.addEventListener('click', function () {
    audioEfects.src = 'mp3/attackMoob.mp3';
})
const goAtackDungeon = document.querySelector('article.dungeon div.fight-start');
//goAtackDungeon.addEventListener('mouseenter', function(){
//    audioEfects2.src = 'mp3/clickSkin.mp3';
//})
goAtackDungeon.addEventListener('click', function () {
    audioEfects.src = 'mp3/attackMoob.mp3';
})
const goAtackBoss = document.querySelector('article.boss div.fight-start');
//goAtackBoss.addEventListener('mouseenter', function(){
//    audioEfects2.src = 'mp3/clickSkin.mp3';
//})
goAtackBoss.addEventListener('click', function () {
    audioEfects.src = 'mp3/attackBoss.mp3';
})

const timeToDefeatMonsterMoob = document.querySelector('article.moob div.fight-time-value p');
const timeToDefeatMonsterDungeon = document.querySelector('article.dungeon div.fight-time-value p');
const timeToDefeatMonsterBoss = document.querySelector('article.boss div.fight-time-value p');

const visualTimeMoob = document.querySelector('article.moob div.fight-time-value div.fight-value-curtain');
const visualTimeDungeon = document.querySelector('article.dungeon div.fight-time-value div.fight-value-curtain');
const visualTimeBoos = document.querySelector('article.boss div.fight-time-value div.fight-value-curtain');

const hpMonsterMoob = document.querySelector('article.moob div.fight-hp-value p');
const hpMonsterDungeon = document.querySelector('article.dungeon div.fight-hp-value p');
const hpMonsterBoss = document.querySelector('article.boss div.fight-hp-value p');

const visualHpMoob = document.querySelector('article.moob div.fight-hp-value div.fight-value-curtain');
const visualHpDungeon = document.querySelector('article.dungeon div.fight-hp-value div.fight-value-curtain');
const visualHpBoss = document.querySelector('article.boss div.fight-hp-value div.fight-value-curtain');




const divWinMoob = document.querySelector('article.moob div.fight-result-win');
const divWinDungeon = document.querySelector('article.dungeon div.fight-result-win');
const divWinBoss = document.querySelector('article.boss div.fight-result-win');

const divLossMoob = document.querySelector('article.moob div.fight-result-loss');
const divLossDungeon = document.querySelector('article.dungeon div.fight-result-loss');
const divLossBoss = document.querySelector('article.boss div.fight-result-loss');

const resultCurtainMoob = document.querySelector('article.moob div.fight-result-curtain');
const resultCurtainDungeon = document.querySelector('article.dungeon div.fight-result-curtain');
const resultCurtainBoss = document.querySelector('article.boss div.fight-result-curtain');

const endWonFightMoob = document.querySelector('article.moob div.fight-result-win div.attack-close');
const endWonFightDungeon = document.querySelector('article.dungeon div.fight-result-win div.attack-close');
const endWonFightBoss = document.querySelector('article.boss div.fight-result-win div.attack-close');

const endLossFightMoob = document.querySelector('article.moob div.fight-result-loss div.attack-close');
const endLossFightDungeon = document.querySelector('article.dungeon div.fight-result-loss div.attack-close');
const endLossFightBoss = document.querySelector('article.boss div.fight-result-loss div.attack-close');

const fightWonAgainMoob = document.querySelector('article.moob div.fight-result-win div.attack-again');
const fightWonAgainDungeon = document.querySelector('article.dungeon div.fight-result-win div.attack-again');
const fightWonAgainBoss = document.querySelector('article.boss div.fight-result-win div.attack-again');

const fightLossAgainMoob = document.querySelector('article.moob div.fight-result-loss div.attack-again');
const fightLossAgainDungeon = document.querySelector('article.dungeon div.fight-result-loss div.attack-again');
const fightLossAgainBoss = document.querySelector('article.boss div.fight-result-loss div.attack-again');

const wonFightOption = [endLossFightBoss, endLossFightDungeon, endLossFightMoob, endWonFightBoss, endWonFightDungeon, endWonFightMoob, fightLossAgainBoss, fightLossAgainDungeon, fightLossAgainMoob, fightWonAgainDungeon, fightWonAgainMoob];
wonFightOption.forEach(option => {
    option.addEventListener('click', function () {
        audioEfects.src = 'mp3/clickClose.mp3';
    })
})


const artifactMoob = document.querySelector('article.moob div.artifact-gain');
const artifactDungeon = document.querySelector('article.dungeon div.artifact-gain');
const artifactBoss = document.querySelector('article.boss div.artifact-gain');

const artifactMoobP = document.querySelector('article.moob p.artifact-gain');
const artifactDungeonP = document.querySelector('article.dungeon p.artifact-gain');
const artifactBossP = document.querySelector('article.boss p.artifact-gain');

const artifactCloseMoob = document.querySelector('article.moob div.artifact-won-close img');
const artifactCloseDungeon = document.querySelector('article.dungeon div.artifact-won-close img');
const artifactCloseBoss = document.querySelector('article.boss div.artifact-won-close img');


const artifactsClose = [artifactCloseMoob, artifactDungeon, artifactBoss];
artifactsClose.forEach(close => {
    close.addEventListener('click', function () {
        audioEfects.src = 'mp3/clickClose.mp3';
    })

})

const artifactImgMoob = document.querySelector('article.moob div.artifact-won-container img');
const artifactImgDungeon = document.querySelector('article.dungeon div.artifact-won-container img');
const artifactImgBoss = document.querySelector('article.boss div.artifact-won-container img');




const expGainMoob = document.querySelector('article.moob p.exp-gain span');
const expGainDungeon = document.querySelector('article.dungeon p.exp-gain span');
const expGainBoss = document.querySelector('article.boss p.exp-gain span');

const moneyGainMoob = document.querySelector('article.moob p.money-gain span');
const moneyGainDungeon = document.querySelector('article.dungeon p.money-gain span');
const moneyGainBoss = document.querySelector('article.boss p.money-gain span');


const pBoss = document.querySelector('div.option.boss p');



artifactCloseMoob.addEventListener('click', function () {
    artifactMoob.style.display = 'none';
})
artifactCloseDungeon.addEventListener('click', function () {
    artifactDungeon.style.display = 'none';
})
artifactCloseBoss.addEventListener('click', function () {
    artifactBoss.style.display = 'none';
})


endWonFightMoob.addEventListener('click', function () {
    divWinMoob.style.display = 'none';
    resultCurtainMoob.style.display = 'none';
    fight.setNewMoob(0);
})
endLossFightMoob.addEventListener('click', function () {
    divLossMoob.style.display = 'none';
    resultCurtainMoob.style.display = 'none';
    fight.setNewMoob(0);
})
fightWonAgainMoob.addEventListener('click', function () {
    divWinMoob.style.display = 'none';
    resultCurtainMoob.style.display = 'none';
    fight.setNewMoob(0);
    fight.timeCountDown(0);
})
fightLossAgainMoob.addEventListener('click', function () {
    divLossMoob.style.display = 'none';
    resultCurtainMoob.style.display = 'none';
    fight.setNewMoob(0);
    fight.timeCountDown(0);
})



endWonFightDungeon.addEventListener('click', function () {
    divWinDungeon.style.display = 'none';
    resultCurtainDungeon.style.display = 'none';
    fight.setNewMoob(1);
})
endLossFightDungeon.addEventListener('click', function () {
    divLossDungeon.style.display = 'none';
    resultCurtainDungeon.style.display = 'none';
    fight.setNewMoob(1);
})
fightWonAgainDungeon.addEventListener('click', function () {
    divWinDungeon.style.display = 'none';
    resultCurtainDungeon.style.display = 'none';
    fight.setNewMoob(1);
    fight.timeCountDown(1);
})
fightLossAgainDungeon.addEventListener('click', function () {
    divLossDungeon.style.display = 'none';
    resultCurtainDungeon.style.display = 'none';
    fight.setNewMoob(1);
    fight.timeCountDown(1);
})



endWonFightBoss.addEventListener('click', function () {
    divWinBoss.style.display = 'none';
    resultCurtainBoss.style.display = 'none';
    if (bossID === 10) {
        pBoss.textContent = `Piętro ${bossID}`;
        monsterBoss.src = monstersImg[3];
        timeToDefeatMonsterBoss.textContent = 60;
        visualTimeBoos.style.width = 100 + '%';
        hpMonsterBoss.textContent = bossesProperties[0].hp;
        visualHpBoss.style.width = 100 + '%';
        goAtackMoob.addEventListener('click', attackMoob);
        goAtackDungeon.addEventListener('click', attackDungeon);
        goAtackBoss.addEventListener('click', attackBoss);
    } else {
        pBoss.textContent = `Piętro ${bossID}`;
        fight.setNewMoob(2);
    }
})
endLossFightBoss.addEventListener('click', function () {
    divLossBoss.style.display = 'none';
    resultCurtainBoss.style.display = 'none';
    if (bossID === 10) {
        pBoss.textContent = `Piętro ${bossID}`;
        monsterBoss.src = monstersImg[3];
        timeToDefeatMonsterBoss.textContent = 60;
        visualTimeBoos.style.width = 100 + '%';
        hpMonsterBoss.textContent = bossesProperties[0].hp;
        visualHpBoss.style.width = 100 + '%';
        goAtackMoob.addEventListener('click', attackMoob);
        goAtackDungeon.addEventListener('click', attackDungeon);
        goAtackBoss.addEventListener('click', attackBoss);
    } else {
        pBoss.textContent = `Piętro ${bossID}`;
        fight.setNewMoob(2);
    }
})
fightLossAgainBoss.addEventListener('click', function () {
    divLossBoss.style.display = 'none';
    resultCurtainBoss.style.display = 'none';
    if (bossID === 10) {
        pBoss.textContent = `Piętro ${bossID}`;
        monsterBoss.src = monstersImg[3];
        timeToDefeatMonsterBoss.textContent = 60;
        visualTimeBoos.style.width = 100 + '%';
        hpMonsterBoss.textContent = bossesProperties[0].hp;
        visualHpBoss.style.width = 100 + '%';
        goAtackMoob.addEventListener('click', attackMoob);
        goAtackDungeon.addEventListener('click', attackDungeon);
        goAtackBoss.addEventListener('click', attackBoss);
    } else {
        pBoss.textContent = `Piętro ${bossID}`;
        fight.setNewMoob(2);
    }
    fight.timeCountDown(2);
})


let moobStats = {
    hp: 40,
    time: 10.00,
    expValue: 3,
    rewardValue: 4,
}

let dungeonStats = {
    hp: 400,
    time: 100.00,
    expValue: 5,
    rewardValue: 24,
}






class Boss {
    constructor(hp, exp, reward) {
        this.bossStats = {
            hp: hp,
            exp: exp,
            reward: reward,
        }
    }
}

const boss1 = new Boss(2400, 10, 1000);
const boss2 = new Boss(8700, 20, 5000);
const boss3 = new Boss(15600, 50, 10000);
const boss4 = new Boss(24200, 50, 25000);
const boss5 = new Boss(34200, 50, 40000);
const boss6 = new Boss(52000, 50, 80000);
const boss7 = new Boss(67500, 50, 100000);
const boss8 = new Boss(113000, 50, 140000);
const boss9 = new Boss(150000, 50, 180000);
const boss10 = new Boss(310000, 0, 0);

let bossesProperties = [boss1.bossStats, boss2.bossStats, boss3.bossStats, boss4.bossStats, boss5.bossStats, boss6.bossStats, boss7.bossStats, boss8.bossStats, boss9.bossStats, boss10.bossStats];


let bossID = 1;








const attackMoob = function () {
    fight.timeCountDown(0);
}
const attackDungeon = function () {
    fight.timeCountDown(1);
}
const attackBoss = function () {
    fight.timeCountDown(2);
}

class Fight {
    setNewMoob(monsterType) {
        if (monsterType === 0) {
            monsterMoob.src = monstersImg[0];
            timeToDefeatMonsterMoob.textContent = moobStats.time;
            visualTimeMoob.style.width = 100 + '%';
            hpMonsterMoob.textContent = moobStats.hp;
            visualHpMoob.style.width = 100 + '%';
        } else if (monsterType === 1) {
            monsterDungeon.src = monstersImg[1];
            timeToDefeatMonsterDungeon.textContent = dungeonStats.time;
            visualTimeDungeon.style.width = 100 + '%';
            hpMonsterDungeon.textContent = dungeonStats.hp;
            visualHpDungeon.style.width = 100 + '%';
        } else if (monsterType === 2) {
            monsterBoss.src = monstersImg[2];
            timeToDefeatMonsterBoss.textContent = 60;
            visualTimeBoos.style.width = 100 + '%';
            hpMonsterBoss.textContent = bossesProperties[0].hp;
            visualHpBoss.style.width = 100 + '%';
        }

        goAtackMoob.addEventListener('click', attackMoob);
        goAtackDungeon.addEventListener('click', attackDungeon);
        goAtackBoss.addEventListener('click', attackBoss);
    }
    timeCountDown(monsterType) {
        if (monsterType === 0) {

            goAtackMoob.removeEventListener('click', attackMoob);
            goAtackDungeon.removeEventListener('click', attackDungeon);
            goAtackBoss.removeEventListener('click', attackBoss);



            monsterCurtainMoob.style.display = 'none';
            const time = moobStats.time;
            let actualTimeToDefeatMonster = moobStats.time;
            const x = moobStats.time;
            const countDown = setInterval(cd, 100)

            function cd() {
                actualTimeToDefeatMonster -= 0.1;
                timeToDefeatMonsterMoob.textContent = actualTimeToDefeatMonster.toFixed(2);
                const y = actualTimeToDefeatMonster;
                const divWidth = y * 100 / x + '%';
                visualTimeMoob.style.width = divWidth;
                if (actualTimeToDefeatMonster <= 0.1) {
                    clearInterval(countDown);
                    monsterCurtainMoob.style.display = 'block';
                    monsterMoob.removeEventListener('click', attack);
                    fight.lossFightMoob();
                    statistics.lossesValue();
                    achievements.lossesAch();
                }
            }

            let actualHp = moobStats.hp;
            const maxHp = moobStats.hp;

            const attack = function () {
                const hitCrit = Math.floor(Math.random() * 100);
                if (hitCrit >= playerStats.playerStats.critical) {
                    audioEfects.src = 'mp3/hit.mp3';
                    statistics.hitValue();
                    actualHp -= playerStats.playerStats.atack;
                    statistics.damageValue(playerStats.playerStats.atack);
                } else {
                    audioEfects.src = 'mp3/critical.mp3';
                    statistics.criticalsValue();
                    achievements.criticalsAch();
                    actualHp -= playerStats.playerStats.atack * 2;
                    statistics.damageValue(playerStats.playerStats.atack * 2);
                }
                hpMonsterMoob.textContent = actualHp;
                const divWidth = actualHp * 100 / maxHp + '%';
                visualHpMoob.style.width = divWidth;
                if (actualHp <= 0) {
                    clearInterval(countDown);
                    monsterCurtainMoob.style.display = 'block';

                    const expWon = moobStats.expValue;
                    const moneyWon = moobStats.rewardValue;

                    expGainMoob.textContent = expWon;
                    moneyGainMoob.textContent = moneyWon;
                    fight.winFightMoob(expWon, moneyWon);
                    monsterMoob.removeEventListener('click', attack);


                    if (allArtifacts.length >= 1) {
                        const artifact = Math.floor(Math.random() * 300)

                        if (artifact === 0) {
                            fight.artifactWon(0);
                            statistics.artifactsEarnedValue();
                            achievements.artifactAch();
                        }
                    }

                    statistics.moobsDefeatedValue();
                    achievements.moobAch();
                    statistics.moneyEarnedValue(moneyWon);
                    achievements.moneyAch();
                    statistics.expEarnedValue(expWon);


                }

            }
            monsterMoob.addEventListener('click', attack);




        } else if (monsterType === 1) {

            goAtackMoob.removeEventListener('click', attackMoob);
            goAtackDungeon.removeEventListener('click', attackDungeon);
            goAtackBoss.removeEventListener('click', attackBoss);



            monsterCurtainDungeon.style.display = 'none';
            const time = dungeonStats.time;
            let actualTimeToDefeatMonster = dungeonStats.time;
            const x = dungeonStats.time;
            const countDown = setInterval(cd, 100)

            function cd() {
                actualTimeToDefeatMonster -= 0.1;
                timeToDefeatMonsterDungeon.textContent = actualTimeToDefeatMonster.toFixed(2);
                const y = actualTimeToDefeatMonster;
                const divWidth = y * 100 / x + '%';
                visualTimeDungeon.style.width = divWidth;
                if (actualTimeToDefeatMonster <= 0.1) {
                    clearInterval(countDown);
                    monsterCurtainDungeon.style.display = 'block';
                    monsterDungeon.removeEventListener('click', attack);
                    fight.lossFightDungeon();
                    statistics.lossesValue();
                    achievements.lossesAch();
                }
            }

            let actualHp = dungeonStats.hp;
            const maxHp = dungeonStats.hp;

            const attack = function () {
                const hitCrit = Math.floor(Math.random() * 100);
                if (hitCrit >= playerStats.playerStats.critical) {
                    audioEfects.src = 'mp3/hit.mp3';
                    statistics.hitValue();
                    actualHp -= playerStats.playerStats.atack;
                    statistics.damageValue(playerStats.playerStats.atack);
                } else {
                    audioEfects.src = 'mp3/critical.mp3';
                    statistics.criticalsValue();
                    achievements.criticalsAch();
                    actualHp -= playerStats.playerStats.atack * 2;
                    statistics.damageValue(playerStats.playerStats.atack * 2);
                }
                hpMonsterDungeon.textContent = actualHp;
                const divWidth = actualHp * 100 / maxHp + '%';
                visualHpDungeon.style.width = divWidth;
                if (actualHp <= 0) {
                    clearInterval(countDown);
                    monsterCurtainDungeon.style.display = 'block';

                    const expWon = dungeonStats.expValue;
                    const moneyWon = dungeonStats.rewardValue;

                    expGainDungeon.textContent = expWon;
                    moneyGainDungeon.textContent = moneyWon;
                    fight.winFightDungeon(expWon, moneyWon);
                    monsterDungeon.removeEventListener('click', attack);


                    if (allArtifacts.length >= 1) {
                        const artifact = Math.floor(Math.random() * 100)

                        if (artifact === 0) {
                            fight.artifactWon(1);
                            statistics.artifactsEarnedValue();
                            achievements.artifactAch();
                        }
                    }
                    statistics.dungeonsFinishedValue();
                    achievements.dungeonAch();
                    statistics.moneyEarnedValue(moneyWon);
                    achievements.moneyAch();
                    statistics.expEarnedValue(expWon);

                }

            }
            monsterDungeon.addEventListener('click', attack);




        } else if (monsterType === 2) {

            goAtackMoob.removeEventListener('click', attackMoob);
            goAtackDungeon.removeEventListener('click', attackDungeon);
            goAtackBoss.removeEventListener('click', attackBoss);



            monsterCurtainBoss.style.display = 'none';
            const time = 60;
            let actualTimeToDefeatMonster = 60;
            const x = 60;
            const countDown = setInterval(cd, 100)

            function cd() {
                actualTimeToDefeatMonster -= 0.1;
                timeToDefeatMonsterBoss.textContent = actualTimeToDefeatMonster.toFixed(2);
                const y = actualTimeToDefeatMonster;
                const divWidth = y * 100 / x + '%';
                visualTimeBoos.style.width = divWidth;
                if (actualTimeToDefeatMonster <= 0.1) {
                    clearInterval(countDown);
                    monsterCurtainBoss.style.display = 'block';
                    monsterBoss.removeEventListener('click', attack);
                    fight.lossFightBoss();
                    statistics.lossesValue();
                    achievements.lossesAch();
                }
            }

            let actualHp = bossesProperties[0].hp;
            const maxHp = bossesProperties[0].hp;

            const attack = function () {
                const hitCrit = Math.floor(Math.random() * 100);
                if (hitCrit >= playerStats.playerStats.critical) {
                    audioEfects.src = 'mp3/hit.mp3';
                    statistics.hitValue();
                    actualHp -= playerStats.playerStats.atack;
                    statistics.damageValue(playerStats.playerStats.atack);
                } else {
                    audioEfects.src = 'mp3/critical.mp3';
                    statistics.criticalsValue();
                    achievements.criticalsAch();
                    actualHp -= playerStats.playerStats.atack * 2;
                    statistics.damageValue(playerStats.playerStats.atack * 2);
                }
                hpMonsterBoss.textContent = actualHp;
                const divWidth = actualHp * 100 / maxHp + '%';
                visualHpBoss.style.width = divWidth;
                if (actualHp <= 0) {
                    clearInterval(countDown);
                    monsterCurtainBoss.style.display = 'block';

                    const expWon = bossesProperties[0].exp;
                    const moneyWon = bossesProperties[0].reward;

                    expGainBoss.textContent = expWon;
                    moneyGainBoss.textContent = moneyWon;

                    if (bossID > artifactsToMoveContainer.children.length) {
                        fight.artifactWon(2);
                        statistics.artifactsEarnedValue();
                        achievements.artifactAch();
                    }

                    bossesProperties.splice(0, 1);
                    bossID++;

                    fight.winFightBoss(expWon, moneyWon);
                    monsterBoss.removeEventListener('click', attack);

                    statistics.bossesDefeatedValue();
                    achievements.bossAch();
                    statistics.moneyEarnedValue(moneyWon);
                    achievements.moneyAch();
                    statistics.expEarnedValue(expWon);

                    if (bossesProperties.length === 0) {
                        endGame.goEnd();
                    }
                }

            }
            monsterBoss.addEventListener('click', attack);




        }
    }
    lossFightMoob() {
        divLossMoob.style.display = 'block';
        resultCurtainMoob.style.display = 'block';
    }
    winFightMoob(expWon, moneyWon) {
        divWinMoob.style.display = 'block';
        resultCurtainMoob.style.display = 'block';
        const expWonSend = expWon;
        playerStats.playerStats.money += moneyWon;
        test.moneyAnimationGain();
        exp.checkLvl(expWonSend);
    }
    lossFightDungeon() {
        divLossDungeon.style.display = 'block';
        resultCurtainDungeon.style.display = 'block';
    }
    winFightDungeon(expWon, moneyWon) {
        divWinDungeon.style.display = 'block';
        resultCurtainDungeon.style.display = 'block';
        const expWonSend = expWon;
        playerStats.playerStats.money += moneyWon;
        test.moneyAnimationGain();
        exp.checkLvl(expWonSend);
    }
    lossFightBoss() {
        divLossBoss.style.display = 'block';
        resultCurtainBoss.style.display = 'block';

    }
    winFightBoss(expWon, moneyWon) {
        divWinBoss.style.display = 'block';
        resultCurtainBoss.style.display = 'block';
        const expWonSend = expWon;
        playerStats.playerStats.money += moneyWon;
        test.moneyAnimationGain();
        exp.checkLvl(expWonSend);
    }
    artifactWon(monsterType) {
        if (monsterType === 0) {
            artifactMoob.style.display = 'block';
            const artifactID = Math.floor(Math.random() * allArtifacts.length);
            artifactImgMoob.src = allArtifactsImg[allArtifacts[artifactID].imgID];
            artifactMoobP.textContent = allArtifacts[artifactID].name;

            const artifactToRemove = {
                name: '',
                attack: '',
                crit: '',
                imgID: ''
            }

            artifactToRemove.name = allArtifacts[artifactID].name;
            artifactToRemove.attack = allArtifacts[artifactID].attack;
            artifactToRemove.crit = allArtifacts[artifactID].critical;
            artifactToRemove.imgID = allArtifacts[artifactID].imgID;

            artifactToMove = artifactToRemove;
            test.pushArtifactToEq();
            attackFromARTIFACT += artifactToRemove.attack;
            criticalFromARTIFACT += artifactToRemove.crit;
            render.renderPlayerStats();

            allArtifacts.splice(artifactID, 1);

        } else if (monsterType === 1) {
            artifactDungeon.style.display = 'block';
            const artifactID = Math.floor(Math.random() * allArtifacts.length);
            artifactImgDungeon.src = allArtifactsImg[allArtifacts[artifactID].imgID];
            artifactDungeonP.textContent = allArtifacts[artifactID].name;

            const artifactToRemove = {
                name: '',
                attack: '',
                crit: '',
                imgID: ''
            }

            artifactToRemove.name = allArtifacts[artifactID].name;
            artifactToRemove.attack = allArtifacts[artifactID].attack;
            artifactToRemove.crit = allArtifacts[artifactID].critical;
            artifactToRemove.imgID = allArtifacts[artifactID].imgID;

            artifactToMove = artifactToRemove;
            test.pushArtifactToEq();
            attackFromARTIFACT += artifactToRemove.attack;
            criticalFromARTIFACT += artifactToRemove.crit;
            render.renderPlayerStats();

            allArtifacts.splice(artifactID, 1);

        } else if (monsterType === 2) {
            artifactBoss.style.display = 'block';
            const artifactID = Math.floor(Math.random() * allArtifacts.length);
            artifactImgBoss.src = allArtifactsImg[allArtifacts[artifactID].imgID];
            artifactBossP.textContent = allArtifacts[artifactID].name;

            const artifactToRemove = {
                name: '',
                attack: '',
                crit: '',
                imgID: ''
            }

            artifactToRemove.name = allArtifacts[artifactID].name;
            artifactToRemove.attack = allArtifacts[artifactID].attack;
            artifactToRemove.crit = allArtifacts[artifactID].critical;
            artifactToRemove.imgID = allArtifacts[artifactID].imgID;

            artifactToMove = artifactToRemove;
            test.pushArtifactToEq();
            attackFromARTIFACT += artifactToRemove.attack;
            criticalFromARTIFACT += artifactToRemove.crit;
            render.renderPlayerStats();

            allArtifacts.splice(artifactID, 1);
        }

        audioEfects.src = 'mp3/artifact.mp3';

    }
    changeMoobAndDungeonProperties() {

    }

}








const fight = new Fight();

//  KLASA MUSIC  //

const musicDivs = [...document.querySelector('div.music-volume-points').children];
const audio = document.querySelector('#music');
const audioEfects = document.querySelector('#music-efects');
const audioEfects2 = document.querySelector('#music-efects2');
const musicPanel = document.querySelector('div.music-interface');
const musicVolume = document.querySelector('div.music-volume');
const musicMute = document.querySelector('div.music-volume img.music-value');
const soundtracks = ['mp3/start.mp3', 'mp3/shop.mp3', 'mp3/home.mp3', 'mp3/battle.mp3', 'mp3/moob.mp3', 'mp3/dungeon.mp3', 'mp3/boss.mp3', 'mp3/win.mp3', 'mp3/loss.mp3'];




musicMute.addEventListener('click', function () {
    audio.volume = 0;
    musicDivs.forEach(div => {
        div.style.backgroundColor = 'transparent';
    });
});


musicDivs.forEach(div => {
    div.addEventListener('click', function () {
        const value = this.getAttribute('id') * 1;
        const index = this.getAttribute('data-index') * 1;
        audio.volume = value;
        if (value >= 0.9) {
            audioEfects.volume = value;
            audioEfects2.volume = value;
        } else {
            audioEfects.volume = value + 0.1;
            audioEfects2.volume = value + 0.1;
        }
        musicDivs.forEach(div => {
            div.style.backgroundColor = 'transparent';
        })
        for (let i = 0; i <= index; i++) {
            musicDivs[i].style.backgroundColor = '#ffb700';
        }
    })
})

audio.volume = 0.1;
musicDivs.forEach(div => {
    div.style.backgroundColor = 'transparent';
})
for (let i = 0; i <= 10; i++) {
    musicDivs[i].style.backgroundColor = '#ffb700';
}



audioEfects.volume = 0.2;
audioEfects2.volume = 0.2;



class Music {
    changeMusic(nr) {
        audio.src = soundtracks[nr];
    }
}

const music = new Music();









//  KLASA STATYSTYKA  //


const lvlEarnedSpan = document.querySelector('article.statistics p.lvl-earned span');
const expEarnedSpan = document.querySelector('article.statistics p.exp-earned span');
const moneyEarnedSpan = document.querySelector('article.statistics p.money-earned span');
const weaponsBoughtSpan = document.querySelector('article.statistics p.weapons-bought span');
const artifactsEarnedSpan = document.querySelector('article.statistics p.artifacts-earned span');
const moobsDefeatedSpan = document.querySelector('article.statistics p.moobs-defeated span');
const dungeonsFinishedSpan = document.querySelector('article.statistics p.dungeons-finished span');
const bossesDefeatedSpan = document.querySelector('article.statistics p.bosses-defeated span');
const lossesSpan = document.querySelector('article.statistics p.losses span');
const hitsSpan = document.querySelector('article.statistics p.hits span');
const criticalsSpan = document.querySelector('article.statistics p.criticals span');
const damageSpan = document.querySelector('article.statistics p.damage span');
const upgradesSpan = document.querySelector('article.statistics p.upgrades span');
const skinsBoughtSpan = document.querySelector('article.statistics p.skins-bought span');
const achievementsGotSpan = document.querySelector('article.statistics p.achievements-got span');


let lvlEarned = 1;
let expEarned = 0;
let moneyEarned = 0;
let weaponsBought = 0;
let artifactsEarned = 0;
let moobsDefeated = 0;
let dungeonsFinished = 0;
let bossesDefeated = 0;
let losses = 0;
let hits = 0;
let criticals = 0;
let damage = 0;
let upgrades = 0;
let skinsBought = 1;
let achievementsGot = 0;



class Statistics {
    hitValue() {
        hits += 1;
        hitsSpan.textContent = hits;
    }
    criticalsValue() {
        criticals += 1;
        criticalsSpan.textContent = criticals;
    }
    damageValue(dmg) {
        damage += dmg;
        damageSpan.textContent = damage;
    }
    moobsDefeatedValue() {
        moobsDefeated += 1;
        moobsDefeatedSpan.textContent = moobsDefeated;
    }
    dungeonsFinishedValue() {
        dungeonsFinished += 1;
        dungeonsFinishedSpan.textContent = dungeonsFinished;
    }
    bossesDefeatedValue() {
        bossesDefeated += 1;
        bossesDefeatedSpan.textContent = bossesDefeated;
    }
    lossesValue() {
        losses += 1;
        lossesSpan.textContent = losses;
    }
    skinsBoughtValue() {
        skinsBought += 1;
        skinsBoughtSpan.textContent = skinsBought;
    }
    weaponsBoughtValue() {
        weaponsBought += 1;
        weaponsBoughtSpan.textContent = weaponsBought;
    }
    moneyEarnedValue(money) {
        moneyEarned += money;
        moneyEarnedSpan.textContent = moneyEarned;
    }
    expEarnedValue(expForEarned) {
        expEarned += expForEarned;
        expEarnedSpan.textContent = expEarned;
    }
    artifactsEarnedValue() {
        artifactsEarned += 1;
        artifactsEarnedSpan.textContent = artifactsEarned;
    }
    upgradesValue() {
        upgrades += 1;
        upgradesSpan.textContent = upgrades;
    }
    achievementsValue() {
        achievementsGot += 1;
        achievementsGotSpan.textContent = achievementsGot;
    }
    lvlEarnedValue() {
        lvlEarned += 1;
        lvlEarnedSpan.textContent = lvlEarned;
    }
}

const statistics = new Statistics();




//  KLASA OSIĄGNIĘCIA  //


const lvlAch1 = document.querySelector('.achievements-lvl div.single-achievement-1');
const lvlAch2 = document.querySelector('.achievements-lvl div.single-achievement-2');
const lvlAch3 = document.querySelector('.achievements-lvl div.single-achievement-3');

const moneyAch1 = document.querySelector('.achievements-money div.single-achievement-1');
const moneyAch2 = document.querySelector('.achievements-money div.single-achievement-2');
const moneyAch3 = document.querySelector('.achievements-money div.single-achievement-3');
const moneyAch4 = document.querySelector('.achievements-money div.single-achievement-4');

const weaponsAch1 = document.querySelector('.achievements-weapons div.single-achievement-1');
const weaponsAch2 = document.querySelector('.achievements-weapons div.single-achievement-2');
const weaponsAch3 = document.querySelector('.achievements-weapons div.single-achievement-3');

const artifactAch1 = document.querySelector('.achievements-artifact div.single-achievement-1');
const artifactAch2 = document.querySelector('.achievements-artifact div.single-achievement-2');
const artifactAch3 = document.querySelector('.achievements-artifact div.single-achievement-3');

const moobAch1 = document.querySelector('.achievements-moob div.single-achievement-1');
const moobAch2 = document.querySelector('.achievements-moob div.single-achievement-2');
const moobAch3 = document.querySelector('.achievements-moob div.single-achievement-3');

const dungeonAch1 = document.querySelector('.achievements-dungeon div.single-achievement-1');
const dungeonAch2 = document.querySelector('.achievements-dungeon div.single-achievement-2');
const dungeonAch3 = document.querySelector('.achievements-dungeon div.single-achievement-3');

const bossAch1 = document.querySelector('.achievements-boss div.single-achievement-1');
const bossAch2 = document.querySelector('.achievements-boss div.single-achievement-2');
const bossAch3 = document.querySelector('.achievements-boss div.single-achievement-3');

const lossesAch1 = document.querySelector('.achievements-losses div.single-achievement-1');
const lossesAch2 = document.querySelector('.achievements-losses div.single-achievement-2');
const lossesAch3 = document.querySelector('.achievements-losses div.single-achievement-3');

const criticalsAch1 = document.querySelector('.achievements-criticals div.single-achievement-1');
const criticalsAch2 = document.querySelector('.achievements-criticals div.single-achievement-2');
const criticalsAch3 = document.querySelector('.achievements-criticals div.single-achievement-3');
const criticalsAch4 = document.querySelector('.achievements-criticals div.single-achievement-4');

const upgradesAch1 = document.querySelector('.achievements-upgrades div.single-achievement-1');
const upgradesAch2 = document.querySelector('.achievements-upgrades div.single-achievement-2');
const upgradesAch3 = document.querySelector('.achievements-upgrades div.single-achievement-3');

const skinsAch1 = document.querySelector('.achievements-skins div.single-achievement-1');
const skinsAch2 = document.querySelector('.achievements-skins div.single-achievement-2');
const skinsAch3 = document.querySelector('.achievements-skins div.single-achievement-3');

const masterAch1 = document.querySelector('.achievements-master div.single-achievement-1');
const masterAch2 = document.querySelector('.achievements-master div.single-achievement-2');
const masterAch3 = document.querySelector('.achievements-master div.single-achievement-3');





const lvlAch1Curtain = document.querySelector('.achievements-lvl div.achievements-curtain-1');
const lvlAch2Curtain = document.querySelector('.achievements-lvl div.achievements-curtain-2');
const lvlAch3Curtain = document.querySelector('.achievements-lvl div.achievements-curtain-3');

const moneyAch1Curtain = document.querySelector('.achievements-money div.achievements-curtain-1');
const moneyAch2Curtain = document.querySelector('.achievements-money div.achievements-curtain-2');
const moneyAch3Curtain = document.querySelector('.achievements-money div.achievements-curtain-3');
const moneyAch4Curtain = document.querySelector('.achievements-money div.achievements-curtain-4');

const weaponsAch1Curtain = document.querySelector('.achievements-weapons div.achievements-curtain-1');
const weaponsAch2Curtain = document.querySelector('.achievements-weapons div.achievements-curtain-2');
const weaponsAch3Curtain = document.querySelector('.achievements-weapons div.achievements-curtain-3');

const artifactAch1Curtain = document.querySelector('.achievements-artifact div.achievements-curtain-1');
const artifactAch2Curtain = document.querySelector('.achievements-artifact div.achievements-curtain-2');
const artifactAch3Curtain = document.querySelector('.achievements-artifact div.achievements-curtain-3');

const moobAch1Curtain = document.querySelector('.achievements-moob div.achievements-curtain-1');
const moobAch2Curtain = document.querySelector('.achievements-moob div.achievements-curtain-2');
const moobAch3Curtain = document.querySelector('.achievements-moob div.achievements-curtain-3');

const dungeonAch1Curtain = document.querySelector('.achievements-dungeon div.achievements-curtain-1');
const dungeonAch2Curtain = document.querySelector('.achievements-dungeon div.achievements-curtain-2');
const dungeonAch3Curtain = document.querySelector('.achievements-dungeon div.achievements-curtain-3');

const bossAch1Curtain = document.querySelector('.achievements-boss div.achievements-curtain-1');
const bossAch2Curtain = document.querySelector('.achievements-boss div.achievements-curtain-2');
const bossAch3Curtain = document.querySelector('.achievements-boss div.achievements-curtain-3');

const lossesAch1Curtain = document.querySelector('.achievements-losses div.achievements-curtain-1');
const lossesAch2Curtain = document.querySelector('.achievements-losses div.achievements-curtain-2');
const lossesAch3Curtain = document.querySelector('.achievements-losses div.achievements-curtain-3');

const criticalsAch1Curtain = document.querySelector('.achievements-criticals div.achievements-curtain-1');
const criticalsAch2Curtain = document.querySelector('.achievements-criticals div.achievements-curtain-2');
const criticalsAch3Curtain = document.querySelector('.achievements-criticals div.achievements-curtain-3');
const criticalsAch4Curtain = document.querySelector('.achievements-criticals div.achievements-curtain-4');

const upgradesAch1Curtain = document.querySelector('.achievements-upgrades div.achievements-curtain-1');
const upgradesAch2Curtain = document.querySelector('.achievements-upgrades div.achievements-curtain-2');
const upgradesAch3Curtain = document.querySelector('.achievements-upgrades div.achievements-curtain-3');

const skinsAch1Curtain = document.querySelector('.achievements-skins div.achievements-curtain-1');
const skinsAch2Curtain = document.querySelector('.achievements-skins div.achievements-curtain-2');
const skinsAch3Curtain = document.querySelector('.achievements-skins div.achievements-curtain-3');

const masterAch1Curtain = document.querySelector('.achievements-master div.achievements-curtain-1');
const masterAch2Curtain = document.querySelector('.achievements-master div.achievements-curtain-2');
const masterAch3Curtain = document.querySelector('.achievements-master div.achievements-curtain-3');





const lvlReward1 = lvlAch1.querySelector('div.get-your-reward p');
lvlReward1.addEventListener('click', function () {
    lvlReward1.parentElement.style.display = 'none';
    lvlAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const lvlReward2 = lvlAch2.querySelector('div.get-your-reward p');
lvlReward2.addEventListener('click', function () {
    lvlReward2.parentElement.style.display = 'none';
    lvlAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const lvlReward3 = lvlAch3.querySelector('div.get-your-reward p');
lvlReward2.addEventListener('click', function () {
    lvlReward3.parentElement.style.display = 'none';
    lvlAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const moneyReward1 = moneyAch1.querySelector('div.get-your-reward p');
moneyReward1.addEventListener('click', function () {
    moneyReward1.parentElement.style.display = 'none';
    moneyAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const moneyReward2 = moneyAch2.querySelector('div.get-your-reward p');
moneyReward2.addEventListener('click', function () {
    moneyReward2.parentElement.style.display = 'none';
    moneyAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const moneyReward3 = moneyAch3.querySelector('div.get-your-reward p');
moneyReward3.addEventListener('click', function () {
    moneyReward3.parentElement.style.display = 'none';
    moneyAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const moneyReward4 = moneyAch4.querySelector('div.get-your-reward p');
moneyReward4.addEventListener('click', function () {
    moneyReward4.parentElement.style.display = 'none';
    moneyAch4.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 100000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(100000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const weaponsReward1 = weaponsAch1.querySelector('div.get-your-reward p');
weaponsReward1.addEventListener('click', function () {
    weaponsReward1.parentElement.style.display = 'none';
    weaponsAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const weaponsReward2 = weaponsAch2.querySelector('div.get-your-reward p');
weaponsReward2.addEventListener('click', function () {
    weaponsReward2.parentElement.style.display = 'none';
    weaponsAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const weaponsReward3 = weaponsAch3.querySelector('div.get-your-reward p');
weaponsReward3.addEventListener('click', function () {
    weaponsReward3.parentElement.style.display = 'none';
    weaponsAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const artifactReward1 = artifactAch1.querySelector('div.get-your-reward p');
artifactReward1.addEventListener('click', function () {
    artifactReward1.parentElement.style.display = 'none';
    artifactAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const artifactReward2 = artifactAch2.querySelector('div.get-your-reward p');
artifactReward2.addEventListener('click', function () {
    artifactReward2.parentElement.style.display = 'none';
    artifactAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const artifactReward3 = artifactAch3.querySelector('div.get-your-reward p');
artifactReward3.addEventListener('click', function () {
    artifactReward3.parentElement.style.display = 'none';
    artifactAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const moobReward1 = moobAch1.querySelector('div.get-your-reward p');
moobReward1.addEventListener('click', function () {
    moobReward1.parentElement.style.display = 'none';
    moobAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const moobReward2 = moobAch2.querySelector('div.get-your-reward p');
moobReward2.addEventListener('click', function () {
    moobReward2.parentElement.style.display = 'none';
    moobAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const moobReward3 = moobAch3.querySelector('div.get-your-reward p');
moobReward3.addEventListener('click', function () {
    moobReward3.parentElement.style.display = 'none';
    moobAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    statistics.moneyEarnedValue(50000);
    test.moneyAnimationGain();
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const dungeonReward1 = dungeonAch1.querySelector('div.get-your-reward p');
dungeonReward1.addEventListener('click', function () {
    dungeonReward1.parentElement.style.display = 'none';
    dungeonAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const dungeonReward2 = dungeonAch2.querySelector('div.get-your-reward p');
dungeonReward2.addEventListener('click', function () {
    dungeonReward2.parentElement.style.display = 'none';
    dungeonAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const dungeonReward3 = dungeonAch3.querySelector('div.get-your-reward p');
dungeonReward3.addEventListener('click', function () {
    dungeonReward3.parentElement.style.display = 'none';
    dungeonAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const bossReward1 = bossAch1.querySelector('div.get-your-reward p');
bossReward1.addEventListener('click', function () {
    bossReward1.parentElement.style.display = 'none';
    bossAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const bossReward2 = bossAch2.querySelector('div.get-your-reward p');
bossReward2.addEventListener('click', function () {
    bossReward2.parentElement.style.display = 'none';
    bossAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const bossReward3 = bossAch3.querySelector('div.get-your-reward p');
bossReward3.addEventListener('click', function () {
    bossReward3.parentElement.style.display = 'none';
    bossAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const lossesReward1 = lossesAch1.querySelector('div.get-your-reward p');
lossesReward1.addEventListener('click', function () {
    lossesReward1.parentElement.style.display = 'none';
    lossesAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const lossesReward2 = lossesAch2.querySelector('div.get-your-reward p');
lossesReward2.addEventListener('click', function () {
    lossesReward2.parentElement.style.display = 'none';
    lossesAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const lossesReward3 = lossesAch3.querySelector('div.get-your-reward p');
lossesReward3.addEventListener('click', function () {
    lossesReward3.parentElement.style.display = 'none';
    lossesAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const criticalsReward1 = criticalsAch1.querySelector('div.get-your-reward p');
criticalsReward1.addEventListener('click', function () {
    criticalsReward1.parentElement.style.display = 'none';
    criticalsAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const criticalsReward2 = criticalsAch2.querySelector('div.get-your-reward p');
criticalsReward2.addEventListener('click', function () {
    criticalsReward2.parentElement.style.display = 'none';
    criticalsAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const criticalsReward3 = criticalsAch3.querySelector('div.get-your-reward p');
criticalsReward3.addEventListener('click', function () {
    criticalsReward3.parentElement.style.display = 'none';
    criticalsAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const criticalsReward4 = criticalsAch4.querySelector('div.get-your-reward p');
criticalsReward4.addEventListener('click', function () {
    criticalsReward4.parentElement.style.display = 'none';
    criticalsAch4.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 100000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(100000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const upgradesReward1 = upgradesAch1.querySelector('div.get-your-reward p');
upgradesReward1.addEventListener('click', function () {
    upgradesReward1.parentElement.style.display = 'none';
    upgradesAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const upgradesReward2 = upgradesAch2.querySelector('div.get-your-reward p');
upgradesReward2.addEventListener('click', function () {
    upgradesReward2.parentElement.style.display = 'none';
    upgradesAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const upgradesReward3 = upgradesAch3.querySelector('div.get-your-reward p');
upgradesReward3.addEventListener('click', function () {
    upgradesReward3.parentElement.style.display = 'none';
    upgradesAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const skinsReward1 = skinsAch1.querySelector('div.get-your-reward p');
skinsReward1.addEventListener('click', function () {
    skinsReward1.parentElement.style.display = 'none';
    skinsAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const skinsReward2 = skinsAch2.querySelector('div.get-your-reward p');
skinsReward2.addEventListener('click', function () {
    skinsReward2.parentElement.style.display = 'none';
    skinsAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const skinsReward3 = skinsAch3.querySelector('div.get-your-reward p');
skinsReward3.addEventListener('click', function () {
    skinsReward3.parentElement.style.display = 'none';
    skinsAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})

const masterReward1 = masterAch1.querySelector('div.get-your-reward p');
masterReward1.addEventListener('click', function () {
    masterReward1.parentElement.style.display = 'none';
    masterAch1.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 500;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(500);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const masterReward2 = masterAch2.querySelector('div.get-your-reward p');
masterReward2.addEventListener('click', function () {
    masterReward2.parentElement.style.display = 'none';
    masterAch2.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 5000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(5000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})
const masterReward3 = masterAch3.querySelector('div.get-your-reward p');
masterReward3.addEventListener('click', function () {
    masterReward3.parentElement.style.display = 'none';
    masterAch3.style.justifyContent = 'flex-start';
    playerStats.playerStats.money += 50000;
    test.moneyAnimationGain();
    statistics.moneyEarnedValue(50000);
    achievements.moneyAch();
    render.renderPlayerStats();
    audioEfects.src = 'mp3/buyItem.mp3';
})



let lvlAchDone = 0;




class Achievements {
    lvlAch() {
        if (lvlEarned === 10) {
            lvlAch1.style.border = '2px solid #ffb700';
            lvlAch1Curtain.style.display = 'none';
            lvlReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (lvlEarned === 25) {
            lvlAch2.style.border = '2px solid #ffb700';
            lvlAch2Curtain.style.display = 'none';
            lvlReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (lvlEarned === 50) {
            lvlAch3.style.border = '2px solid #ffb700';
            lvlAch3Curtain.style.display = 'none';
            lvlReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    moneyAch() {
        if (moneyEarned >= 1000 && lvlAchDone === 0) {
            moneyAch1.style.border = '2px solid #ffb700';
            moneyAch1Curtain.style.display = 'none';
            moneyReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
            lvlAchDone++;
        } else if (moneyEarned >= 10000 && lvlAchDone === 1) {
            moneyAch2.style.border = '2px solid #ffb700';
            moneyAch2Curtain.style.display = 'none';
            moneyReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
            lvlAchDone++;
        } else if (moneyEarned >= 100000 && lvlAchDone === 2) {
            moneyAch3.style.border = '2px solid #ffb700';
            moneyAch3Curtain.style.display = 'none';
            moneyReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
            lvlAchDone++;
        } else if (moneyEarned >= 500000 && lvlAchDone === 3) {
            moneyAch4.style.border = '2px solid #ffb700';
            moneyAch4Curtain.style.display = 'none';
            moneyReward4.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
            lvlAchDone++;
        }
    }
    weaponsAch() {
        if (weaponsBought === 3) {
            weaponsAch1.style.border = '2px solid #ffb700';
            weaponsAch1Curtain.style.display = 'none';
            weaponsReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (weaponsBought === 8) {
            weaponsAch2.style.border = '2px solid #ffb700';
            weaponsAch2Curtain.style.display = 'none';
            weaponsReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (weaponsBought === 15) {
            weaponsAch3.style.border = '2px solid #ffb700';
            weaponsAch3Curtain.style.display = 'none';
            weaponsReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    artifactAch() {
        if (artifactsEarned === 2) {
            artifactAch1.style.border = '2px solid #ffb700';
            artifactAch1Curtain.style.display = 'none';
            artifactReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (artifactsEarned === 5) {
            artifactAch2.style.border = '2px solid #ffb700';
            artifactAch2Curtain.style.display = 'none';
            artifactReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (artifactsEarned === 10) {
            artifactAch3.style.border = '2px solid #ffb700';
            artifactAch3Curtain.style.display = 'none';
            artifactReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    moobAch() {
        if (moobsDefeated === 50) {
            moobAch1.style.border = '2px solid #ffb700';
            moobAch1Curtain.style.display = 'none';
            moobReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (moobsDefeated === 300) {
            moobAch2.style.border = '2px solid #ffb700';
            moobAch2Curtain.style.display = 'none';
            moobReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (moobsDefeated === 1000) {
            moobAch3.style.border = '2px solid #ffb700';
            moobAch3Curtain.style.display = 'none';
            moobReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    dungeonAch() {
        if (dungeonsFinished === 10) {
            dungeonAch1.style.border = '2px solid #ffb700';
            dungeonAch1Curtain.style.display = 'none';
            dungeonReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (dungeonsFinished === 25) {
            dungeonAch2.style.border = '2px solid #ffb700';
            dungeonAch2Curtain.style.display = 'none';
            dungeonReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (dungeonsFinished === 50) {
            dungeonAch3.style.border = '2px solid #ffb700';
            dungeonAch3Curtain.style.display = 'none';
            dungeonReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    bossAch() {
        if (bossesDefeated === 1) {
            bossAch1.style.border = '2px solid #ffb700';
            bossAch1Curtain.style.display = 'none';
            bossReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (bossesDefeated === 5) {
            bossAch2.style.border = '2px solid #ffb700';
            bossAch2Curtain.style.display = 'none';
            bossReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (bossesDefeated === 10) {
            bossAch3.style.border = '2px solid #ffb700';
            bossAch3Curtain.style.display = 'none';
            bossReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    lossesAch() {
        if (losses === 10) {
            lossesAch1.style.border = '2px solid #ffb700';
            lossesAch1Curtain.style.display = 'none';
            lossesReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (losses === 50) {
            lossesAch2.style.border = '2px solid #ffb700';
            lossesAch2Curtain.style.display = 'none';
            lossesReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (losses === 100) {
            lossesAch3.style.border = '2px solid #ffb700';
            lossesAch3Curtain.style.display = 'none';
            lossesReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    criticalsAch() {
        if (criticals === 100) {
            criticalsAch1.style.border = '2px solid #ffb700';
            criticalsAch1Curtain.style.display = 'none';
            criticalsReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (criticals === 500) {
            criticalsAch2.style.border = '2px solid #ffb700';
            criticalsAch2Curtain.style.display = 'none';
            criticalsReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (criticals === 1000) {
            criticalsAch3.style.border = '2px solid #ffb700';
            criticalsAch3Curtain.style.display = 'none';
            criticalsReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (criticals === 10000) {
            criticalsAch4.style.border = '2px solid #ffb700';
            criticalsAch4Curtain.style.display = 'none';
            criticalsReward4.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    upgradesAch() {
        if (upgrades === 5) {
            upgradesAch1.style.border = '2px solid #ffb700';
            upgradesAch1Curtain.style.display = 'none';
            upgradesReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (upgrades === 10) {
            upgradesAch2.style.border = '2px solid #ffb700';
            upgradesAch2Curtain.style.display = 'none';
            upgradesReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (upgrades === 50) {
            upgradesAch3.style.border = '2px solid #ffb700';
            upgradesAch3Curtain.style.display = 'none';
            upgradesReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    skinsAch() {
        if (skinsBought === 5) {
            skinsAch1.style.border = '2px solid #ffb700';
            skinsAch1Curtain.style.display = 'none';
            skinsReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (skinsBought === 10) {
            skinsAch2.style.border = '2px solid #ffb700';
            skinsAch2Curtain.style.display = 'none';
            skinsReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (skinsBought === 20) {
            skinsAch3.style.border = '2px solid #ffb700';
            skinsAch3Curtain.style.display = 'none';
            skinsReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
    masterAch() {
        if (achievementsGot === 10) {
            masterAch1.style.border = '2px solid #ffb700';
            masterAch1Curtain.style.display = 'none';
            masterReward1.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (achievementsGot === 25) {
            masterAch2.style.border = '2px solid #ffb700';
            masterAch2Curtain.style.display = 'none';
            masterReward2.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        } else if (achievementsGot === 37) {
            masterAch3.style.border = '2px solid #ffb700';
            masterAch3Curtain.style.display = 'none';
            masterReward3.style.animation = 'take-reward 0.5s linear infinite';
            statistics.achievementsValue();
            achievements.masterAch();
        }
    }
}


const achievements = new Achievements();


//  KLASA KONIEC  //



const endingScreen = document.querySelector('div.ending');
const sendingResultScreen = document.querySelector('div.sendingResults');
const sendingResultScreenClose = document.querySelector('.sendingResultsClose');
sendingResultScreenClose.addEventListener('click', function () {
    sendingResultScreen.style.display = 'none';
    audioEfects.src = 'mp3/clickClose.mp3';
})
const endingButton = document.querySelector('.endButton');
endingButton.addEventListener('click', function () {
    window.location.reload();
});
const sendingResultsButton = document.querySelector('.sendResults');
const sendingResultsButton2 = document.querySelector('.sendResults2');
const resultsSent = document.querySelector('.resultsSent');
sendingResultsButton.addEventListener('click', function () {
    // this.classList.add('none');
    // resultsSent.classList.remove('none');
    sendingResultScreen.style.display = 'block';
    audioEfects.src = 'mp3/clickClose.mp3';
});

let endDate;
sendingResultsButton2.addEventListener('click', function () {
    const usernameInp = document.querySelector('.usernameInp');
    const username = usernameInp.value;

    const endTime = (endDate.getTime() / 1000).toFixed() * 1;
    const gameTime = endTime - startTime;
    let hours = Math.floor(gameTime / 3600);
    let minutes = Math.floor((gameTime - (hours * 3600)) / 60);
    let seconds = gameTime - (hours * 3600) - (minutes * 60);


    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    const completionTime = `${hours}:${minutes}:${seconds}`;

    fetch('https://question-mark-project-anime.herokuapp.com/sword-art-online-clicker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            completionTime,
            lvl: lvlEarned,
            achievements: achievementsGot,
            swords: weaponsBought
        }),
    });
    sendingResultScreen.style.display = 'none';
    sendingResultsButton.classList.add('none');
    resultsSent.classList.remove('none');
    audioEfects.src = 'mp3/clickClose.mp3';
});

const endingLvlEarnedSpan = document.querySelector('div.ending-stats p.ending-lvl-earned span');
const endingExpEarnedSpan = document.querySelector('div.ending-stats p.ending-exp-earned span');
const endingMoneyEarnedSpan = document.querySelector('div.ending-stats p.ending-money-earned span');
const endingWeaponsBoughtSpan = document.querySelector('div.ending-stats p.ending-weapons-bought span');
const endingArtifactsEarnedSpan = document.querySelector('div.ending-stats p.ending-artifacts-earned span');
const endingMoobsDefeatedSpan = document.querySelector('div.ending-stats p.ending-moobs-defeated span');
const endingDungeonsFinishedSpan = document.querySelector('div.ending-stats p.ending-dungeons-finished span');
const endingBossesDefeatedSpan = document.querySelector('div.ending-stats p.ending-bosses-defeated span');
const endingLossesSpan = document.querySelector('div.ending-stats p.ending-losses span');
const endingHitsSpan = document.querySelector('div.ending-stats p.ending-hits span');
const endingCriticalsSpan = document.querySelector('div.ending-stats p.ending-criticals span');
const endingDamageSpan = document.querySelector('div.ending-stats p.ending-damage span');
const endingUpgradesSpan = document.querySelector('div.ending-stats p.ending-upgrades span');
const endingSkinsBoughtSpan = document.querySelector('div.ending-stats p.ending-skins-bought span');
const endingAchievementsGotSpan = document.querySelector('div.ending-stats p.ending-achievements-got span');

const hoursSpan = document.querySelector('span.hours');
const minutesSpan = document.querySelector('span.minutes');
const secondsSpan = document.querySelector('span.seconds');


const authors = document.querySelector('div.ending-thanks');
const question = document.querySelector('div.ending div.question');
const przemciosss = document.querySelector('div.ending div.przemek');
const ppekkox = document.querySelector('div.ending div.popek');
const studio = document.querySelector('div.ending-logo');


const endDivScroll = document.querySelector('div.ending div.scroll-bar');

endDivScroll.addEventListener('scroll', function () {
    const endScrollValue = endDivScroll.scrollTop;
    const endingScreenHeight = endingScreen.offsetHeight;
    if (endScrollValue >= authors.offsetTop + question.offsetTop * 2 - endingScreenHeight) {
        question.style.opacity = 1;
    }
    if (endScrollValue >= authors.offsetTop + przemciosss.offsetTop + question.offsetTop - endingScreenHeight) {
        przemciosss.style.opacity = 1;
    }
    if (endScrollValue >= authors.offsetTop + ppekkox.offsetTop + question.offsetTop - endingScreenHeight) {
        ppekkox.style.opacity = 1;
    }
    if (endScrollValue >= studio.offsetTop + question.offsetTop - endingScreenHeight) {
        studio.style.opacity = 1;
    }
});

class EndGame {
    goEnd() {

        audio.src = 'mp3/win.mp3';
        endingLvlEarnedSpan.textContent = lvlEarned;
        endingExpEarnedSpan.textContent = expEarned;
        endingMoneyEarnedSpan.textContent = moneyEarned;
        endingWeaponsBoughtSpan.textContent = weaponsBought;
        endingArtifactsEarnedSpan.textContent = artifactsEarned;
        endingMoobsDefeatedSpan.textContent = moobsDefeated;
        endingDungeonsFinishedSpan.textContent = dungeonsFinished;
        endingBossesDefeatedSpan.textContent = bossesDefeated;
        endingLossesSpan.textContent = losses;
        endingHitsSpan.textContent = hits;
        endingCriticalsSpan.textContent = criticals;
        endingDamageSpan.textContent = damage;
        endingUpgradesSpan.textContent = upgrades;
        endingSkinsBoughtSpan.textContent = skinsBought;
        endingAchievementsGotSpan.textContent = achievementsGot;
        endingScreen.style.display = 'block';
        sectionPlayerStatistics.style.display = 'none';
        musicVolume.style.display = 'none';
        const date1 = new Date();
        endDate = date1;
        const endTime = (date1.getTime() / 1000).toFixed() * 1;
        const gameTime = endTime - startTime;
        const hours = Math.floor(gameTime / 3600);
        const minutes = Math.floor((gameTime - (hours * 3600)) / 60);
        const seconds = gameTime - (hours * 3600) - (minutes * 60);


        if (hours < 10) {
            hoursSpan.textContent = `0${hours} `;
        } else {
            hoursSpan.textContent = hours + " ";
        }
        if (minutes < 10) {
            minutesSpan.textContent = `0${minutes} `;
        } else {
            minutesSpan.textContent = minutes + " ";
        }
        if (seconds < 10) {
            secondsSpan.textContent = `0${seconds} `;
        } else {
            secondsSpan.textContent = seconds + " ";
        }
    }
}
const endGame = new EndGame();
