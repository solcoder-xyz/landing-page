#!/usr/bin/env python3
"""
SolCoder ASCII Banner Printer
Print the full SOLCODER banner and SCR logo with gradient colors
"""

def print_full_banner():
    """Print full SOLCODER ASCII banner with gradient colors"""

    lines = [
        " @@@@@@    @@@@@@   @@@        @@@@@@@   @@@@@@   @@@@@@@   @@@@@@@@  @@@@@@@  ",
        "@@@@@@@   @@@@@@@@  @@@       @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  ",
        "!@@       @@!  @@@  @@!       !@@       @@!  @@@  @@!  @@@  @@!       @@!  @@@  ",
        "!@!       !@!  @!@  !@!       !@!       !@!  @!@  !@!  @!@  !@!       !@!  @!@  ",
        "!!@@!!    @!@  !@!  @!!       !@!       @!@  !@!  @!@  !@!  @!!!:!    @!@!!@!   ",
        " !!@!!!   !@!  !!!  !!!       !!!       !@!  !!!  !@!  !!!  !!!!!:    !!@!@!    ",
        "     !:!  !!:  !!!  !!:       :!!       !!:  !!!  !!:  !!!  !!:       !!: :!!   ",
        "    !:!   :!:  !:!   :!:      :!:       :!:  !:!  :!:  !:!  :!:       :!:  !:!  ",
        ":::: ::   ::::: ::   :: ::::   ::: :::  ::::: ::   :::: ::   :: ::::  ::   :::  ",
        ":: : :     : :  :   : :: : :   :: :: :   : :  :   :: :  :   : :: ::    :   : :  "
    ]

    colors = [
        "#9945FF",
        "#8264FF",
        "#6E8CFF",
        "#55B4F5",
        "#3CDCE1",
        "#28F0C8",
        "#19F5A5",
        "#14F58C",
        "#14F195",
        "#14F195"
    ]

    print("\n" + "="*80)
    print("FULL SOLCODER BANNER")
    print("="*80 + "\n")

    for line, hex_color in zip(lines, colors):
        r = int(hex_color[1:3], 16)
        g = int(hex_color[3:5], 16)
        b = int(hex_color[5:7], 16)
        print(f"\033[38;2;{r};{g};{b}m{line}\033[0m")


def print_scr_logo():
    """Print SCR ASCII logo with gradient colors"""

    lines = [
        " @@@@@@    @@@@@@@  @@@@@@@   ",
        "@@@@@@@   @@@@@@@@  @@@@@@@@  ",
        "!@@       !@@       @@!  @@@  ",
        "!@!       !@!       !@!  @!@  ",
        "!!@@!!    !@!       @!@!!@!   ",
        " !!@!!!   !!!       !!@!@!    ",
        "     !:!  :!!       !!: :!!   ",
        "    !:!   :!:       :!:  !:!  ",
        ":::: ::    ::: :::  ::   :::  ",
        ":: : :     :: :: :   :   : :  "
    ]

    colors = [
        "#9945FF",
        "#8264FF",
        "#6E8CFF",
        "#55B4F5",
        "#3CDCE1",
        "#28F0C8",
        "#19F5A5",
        "#14F58C",
        "#14F195",
        "#14F195"
    ]

    print("\n" + "="*80)
    print("SCR LOGO")
    print("="*80 + "\n")

    for line, hex_color in zip(lines, colors):
        r = int(hex_color[1:3], 16)
        g = int(hex_color[3:5], 16)
        b = int(hex_color[5:7], 16)
        print(f"\033[38;2;{r};{g};{b}m{line}\033[0m")


if __name__ == "__main__":
    print_full_banner()
    print_scr_logo()
    print("\n" + "="*80)
    print("🚀 SolCoder - AI-Powered Solana Development")
    print("="*80 + "\n")
