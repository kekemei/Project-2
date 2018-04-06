var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                   o            ",
   "                         y                                        xxx           ",
   "       y                                       y             xx                 ",
   "                                                                 x!!!x          ",
   "                               y                      o      y   xxxxx          ",
   "     y                                                xx                     f  ",
   "         c                                     xx                           xx  ",
   "  x      xx                                        x!!!!x                    x  ",
   "  xx                                        o      xxxxxx                xx  x  ",
   "  xxx                    o     c           xxxx                            o x  ",
   "  xxxx                   o    xxx                                          o x  ",
   "  xxxxx  @       c  ^               ^  c  ^          ^  c ^    o      c  ^   x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxx       xxxxxxxxxxx  xx   xxxxxxxxx xxx xxxxxxxxxxxx  ",
   "                          x       x         x       x       x     x             ",
   "                          x!!!!!!!x         x!!!!!!!x       x!!!!!x             ",
   "                          x!!!!!!!x         xxxxxxxxx       x!!!!!x             ",
   "                          xxxxxxxxx                         xxxxxxx             ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                y                       y                      y                                  ",
   "        y                                                                                                         ",
   "                                                                                                                  ",
   "                                          y                                                        y              ",
   "                                                                                       xxxxx                 f    ",
   "                 y                                                       y                                xxxxxx  ",
   "                                                                              xxxx                 c              ",
   "                                                 y                                               xxxx             ",
   "                                                                      o o                                         ",
   "    y                                                                xxxxx          yo                            ",
   "                    y                              c         xxx                   xxxxx                          ",
   "xxx                                               xxxx                                      xxx               y   ",
   "  x                                      xxx                  y                                     o  o          ",
   "  xxx                             oo                       o                                       xxxxxxx        ",
   "    x            c               xxxx                     xxxx                           c  c                     ",
   "    x  @        xxxx                                                                   xxxxxxxx                   ",
   "    xxxxxxxxx                                                           c            xxx      xx                  ",
   "            x         xxxxxx              oo                 c         xxx           x         x   ^^^^^^^^^^^^   ",
   "            x         x    xxx           xxxx           xxxxxxxxxxxx    ==    xxxxxxxx         xxxxxxxxxxxxxxxxxx ",
   "            x         x      xxxx                     xxx          x          x                                   ",
   "            x         x         xxxxx           xxxxxxx            x          x                                   ",
   "            x         x             x!!!!!!!!!!!x                  x          x                                   ",
   "            x         x             x!!!!!!!!!!!x                  x          x                                   ",
   "            x         x             xxxxxxxxxxxxx                  x^^^^^^^^^ x                                   ",
   "            x ^^^^^^^ x                                            xxxxxxxxxxxx                                   ",
   "            xxxxxxxxxxx                                                                                           ",
   "                                                                                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
