info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mySprite = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(10, 115)
    projectile2.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2000)
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(10, 115)
    animation.runImageAnimation(
    projectile,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
