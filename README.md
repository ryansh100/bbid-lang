# bbid-lang / Building Block Identification Language

This project's goal is to create a more descriptive, programmable and extensible way of describing building block parts such as LEGO&reg;.

The system consists of descriptor assignments in Radix64 blocks.

The following could be represented as `0-13-------------5.----------13-----------------------------------------K-----`

<img src="http://img.bricklink.com/ItemImage/PL/3001.png" />

This might seem like overkill, but how do you systematically describe elements that combine a variety of properties more than studs and the ability to socket with other studs? To for example clips, bars, technic-style axles, etc... Would you know what I mean when I say "Plade 1X2 M. Van. Hul Ø 4,8"? Most likely not.

<img src="http://cache.lego.com/media/bricks/5/2/6019987.jpg" />

## The Spec Sheet

| Attribute            | Description                                                                      | Type        | Sample Value    |
|----------------------|----------------------------------------------------------------------------------|-------------|-----------------|
| Brand                | Make of the part                                                                 | Radix64[1]  | -               |
| Assembly             | Whether or not the part is a combination of other parts                          | Radix64[1]  | -               |
| Studs                | Represents a block of possible stud orientations, 5 blocks of stud configuration | Radix64[15] | 13------------- |
| - Studs/Max          | Maximum length row of studs                                                      | Radix64[1]  | 1               |
| - Studs/Min          | Minimum length row of studs                                                      | Radix64[1]  | 3               |
| - Studs/Adjustment   | The amount of studs to subtract from min x max.                                  | Radix64[1]  | -               |
| Height               | Increments of 2mm                                                                | Radix64{1,2}| 5.              |
| Hinges               | Representation of possible hinge orientations, Max 3 orientations                | Radix64[6]  | ------          |
| - Hinges/Orientation | Vertical/Horizontal                                                              | Radix64[1]  | -               |
| - Hinges/Type        | Hinge Type                                                                       | Radix64[1]  | -               |
| Socket               | Represents possible stuck socket orientations, 5 blocks of stud configuration    | Radix64[15] | 013------------ |
| - Socket/Min         | Maximum length row of sockets                                                    | Radix64[1]  | 1               |
| - Socket/Max         | Minimum length row of sockets                                                    | Radix64[1]  | 3               |
| - Socket/Adjustment  | Adjustment to min x max                                                          | Radix64[1]  | -               |
| Clips                | Representation of possible clip orientations, Max 4                              | Radix64[4]  | ----            |
| - Clips/Count        | The number of clips                                                              | Radix64[1]  | -               |
| Axle Sockets         | Number of axle sockets                                                           | Radix64[1]  | -               |
| Axles                | Possible axle orientations, 4 possible                                           | Radix64[4]  | ----            |
| - Axles/Length       | The length of the axle in 8 mm increments                                        | Radix64[1]  | -               |
| Pins                 | Possible Pin Orientations, 3 possible                                            | Radix64[6]  | ------          |
| - Pins/Length        | In increments of 8mm                                                             | Radix64[1]  | -               |
| - Pins/Count         | Count of pins in orientation                                                     | Radix64[1]  | -               |
| Pin Sockets          | Possible Pin Socket Orientations, 4 possible                                     | Radix64[4]  | ----            |
| - Pin Sockets/Count  | Count of pin sockets                                                             | Radix64[1]  | -               |
| Clip Bar             | Possible Clip bar orientations, 4 possible                                       | Radix64[4]  | ----            |
| - Clip Bar/Count     | Number of bars that can be clipped                                               | Radix64[1]  | -               |
| Sleeve               | Possible Bar Sleeve orientations, 4 maximum                                      | Radix64[4]  | ----            |
| - Sleeve/Count       | Count of sleeve for a given orientation                                          | Radix64[1]  | -               |
| Mini-Bar             | Whether or not it contains a mini Bar                                            | Radix64[1]  | -               |
| Colors               | Set of colors present, 4 possible                                                | Radix64[4]  | ----            |
| - Colors/color       | A color id                                                                       | Radix64[1]  | -               |
| Sticker              | Represents                                                                       | Radix64[4]  | --              |
| - Sticker/Min        | Minimum measurement in 2mm increments                                            | Radix64[1]  | -               |
| - Sticker/Max        | Maximum measurement in 2mm increments                                            | Radix64[1]  | -               |
| Printed              | Whether or not the part is printed on                                            | Radix64[1]  | -               |
| Modifier             | Unique Modifier to the part                                                      | Radix64{1,3}| -..             |


## Demo Site

The following site illustrates the usage of BBID system to generate codes.

[https://ryansh100.github.io/bbid-lang/](https://ryansh100.github.io/bbid-lang/)
