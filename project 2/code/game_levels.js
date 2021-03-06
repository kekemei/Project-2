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
   "            y                                                                                    y            ",
   "                                       y                            y                                         ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "        y                                                                                   y                 ",
   "                                                                                                              ",
   "                                               y                                                              ",
   "                                                                     y                                        ",
   "  x                                                                                                           ",
   "  x @  c                      y                                                                               ",
   "  xxxxxx     o o                                                                                y             ",
   "            xxxxx                                                                  c                          ",
   "                       c                      o                                  xxxxx                  f     ",
   "                     xxxxx    xx   c  c     xxxxx                                                    xxxxxxx  ",
   "                                  xxxxxx              xxx                                     o o             ",
   "                                                               xxxxx                        xxxxxx            ",
   "                          x        x              o o                                c                        ",
   "                          x!!!!!!!!x             xxxxxx                   o        xxxxx                      ",
   "                          x!!!!!!!!x                          c  c      xxxxx                                 ",
   "                          xxxxxxxxxx                        xxxxxxxx                                          ",
   "                                                                           x        x                         ",
   "                                                                           x!!!!!!!!x                         ",
   "                                                                           x!!!!!!!!x                         ",
   "                                                                           xxxxxxxxxx                         ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
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
