# bbid-lang / Building Block Identification Language

This project's goal is to create a more descriptive, programmable and extensible way of describing building block parts such as LEGO&reg;.

The system consists of descriptor assignments in a fixed length key. Available block assignments are tinyint, Int, Base64.

The following could be represented as `10EC=============D=000000EC=================0====0000000000000000000C===========0===`

<img src="http://img.bricklink.com/ItemImage/PL/3001.png" />

This might seem like overkill, but how do you systematically descibe elements that combine a variety of propertie more than studs and the ability to socket with other studs. Like clips, bars, technic-style axles, etc.

## The Spec Sheet

| Attribute            | Description                                                                      | Type       | Sampe Value     |
|----------------------|----------------------------------------------------------------------------------|------------|-----------------|
| Brand                | Make of the part                                                                 | Int        | 1               |
| Assembly             | Whether or not the part is a combination of other parts                          | Tinyint    | 0               |
| Studs                | Represents a block of possible stud orientations, 5 blocks of stud configuration | Base64[15] | EC============= |
| - Studs/Max          | Maximum length row of studs                                                      | Base64     | E               |
| - Studs/Min          | Minimum length row of studs                                                      | Base64     | C               |
| - Studs/Adjustment   | The amount of studs to subtract from min x max.                                  | Base61     | =               |
| Height               | Increments of 2mm                                                                | Base64[2]  | D=              |
| Hinges               | Representation of possible hinge orientations, Max 3 orientations                | Int   [8]  | 000000          |
| - Hinges/Orientation | Vertical/Horizontal                                                              | Int        | 0               |
| - Hinges/Type        | Hinge Type                                                                       | Int        | 0               |
| Socket               | Represents possible stuck socket orientations, 5 blocks of stud configuration    | Mix[15]    | EC============= |
| - Socket/Min         | Maximum length row of sockets                                                    | Base64     | C               |
| - Socket/Max         | Minimum length row of sockets                                                    | Base64     | E               |
| - Socket/Adjustment  | Adjustment to min x max                                                          | Base64     | =               |
| Clips                | Representation of possible clip orientations, Max 4                              | Base64     | ====            |
| - Clips/Count        | The number of clips                                                              | Base64     | =               |
| Axle Sockets         | Number of axle sockets                                                           | Int        | 0               |
| Axles                | Possible axle orientations, 4 possible                                           | Base64[4]  | ====            |
| - Axles/Length       | The length of the axle in 8 mm increments                                        | Base64     | =               |
| Pins                 | Possible Pin Orientations, 3 possible                                            | Number[6]  | 000000          |
| - Pins/Length        | In increments of 8mm                                                             | Int        | 0               |
| - Pins/Count         | Count of pins in orientation                                                     | Int        | 0               |
| Pin Sockets          | Possible Pin Socket Orientations, 4 possible                                     | Int   [4]  | 0000            |
| - Pin Sockets/Count  | Count of pin sockets                                                             | Int        | 0               |
| Clip Bar             | Possible Clip bar orientations, 4 possible                                       | Int   [4]  | 0000            |
| - Clip Bar/Count     | Number of bars that can be clipped                                               | Int        | 0               |
| Sleeve               | Possible Bar Sleeve orientations, 4 maximum                                      | Int   [4]  | 0000            |
| - Sleeve/Count       | Count of sleeve for a given orientation                                          | Int        | 0               |
| Mini-Bar             | Whether or not it contains a mini Bar                                            | TinyInt    | 0               |
| Colors               | Set of colors present, 4 possible                                                | Base64[8]  | ========        |
| - Colors/color       | A color id                                                                       | Base64[2]  | ==              |
| Sticker              | Represents                                                                       | Base64[4]  | ====            |
| - Sticker/Min        | Minimum measurement in 2mm increments                                            | Base64[2]  | ==              |
| - Sticker/Max        | Maximum measurement in 2mm increments                                            | Base64[2]  | ==              |
| Printed              | Whether or not the part is printed on                                            | TinyInt    | 0               |
| Modifier             | Unique Modifier to the part                                                      | Base64[3]  | ===             |
|                      |                                                                                  |            |                 |
|                      |                                                                                  |            |                 |
