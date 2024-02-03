# [jortvanleenen.nl](https://jortvanleenen.nl) ([jortvanleenen.github.io](https://jortvanleenen.github.io))

## About

This repository contains the source code for my personal website.
It is built using [Jekyll](https://jekyllrb.com) and hosted on [GitHub Pages](https://pages.github.com/).
The custom domain is registered with a Dutch registrar.

### Lighthouse Audit

| Desktop[^1]                                                  | Mobile[^2]                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](.github/lighthouse-audit-results/desktop/pagespeed.svg)  | ![](.github/lighthouse-audit-results/mobile/pagespeed.svg)  |

[^1]: The desktop audit uses the following Lighthouse CLI options: `--preset=desktop --only-categories=accessibility,best-practices,performance,seo`.

[^2]: The mobile audit uses the following Lighthouse CLI options: `-form-factor=mobile --screenEmulation.mobile --screenEmulation.width=360 --screenEmulation.height=640 --screenEmulation.deviceScaleFactor=2 --throttling.cpuSlowdownMultiplier=2 --only-categories=accessibility,best-practices,performance,seo`.
## Implementation Details

### Navigation Bar

A page is added to the navigation bar when the `navbar_priority` variable is defined in its front matter.
The priority value is considered a string and sorted as such alphabetically.
The reason for this is that neither Liquid (nor Jekyll) provides an easy numerical sorting method.
The sorted list of pages will be displayed in the navigation bar in the order of the sorted list.

_Example: consider two items to be displayed in the navigation bar with the following priorities: `5` and `10`.
The string `10` is alphabetically before `5`, so the item with the priority of `10` will be displayed first._

## License

You are free to use the content of this repository for your own purposes, as long as you comply with the restrictions as
imposed by the applied licenses described below.

The textual content of this website, i.e. the information that can be read or heard through a web browsing application
or similar, is licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The source code, i.e. the formal language that specifies how the textual content, as described earlier, is conveyed, is
licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html); additionally, see the `LICENSE` file for
the full deed.

_Example: the HTML markup of this website is licensed under the GNU GPLv3, while the textual content of the blog
posts is licensed under the CC BY-SA 4.0._

## Contributing

If you have found a **typo, or another mistake**, please open an issue or submit a pull request.
If you have a **question or suggestion**, feel free to open an issue.
In all cases, you are welcome to send me an email instead.
Emailing me is also preferred if you would like to **reach out to me directly**.

_Please see the 'About' page on my website for my email address and other ways to contact me._
