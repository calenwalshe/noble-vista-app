"""Generate favicon sizes from the base 96x96 PNG using Pillow."""
from pathlib import Path

from PIL import Image


BASE_ICON = Path("assets/media/favicon-96x96.png")

OUTPUTS = {
    16: Path("assets/media/favicon-16x16.png"),
    32: Path("assets/media/favicon-32x32.png"),
    48: Path("assets/media/favicon-48x48.png"),
    180: Path("assets/media/apple-touch-icon.png"),
}


def generate_favicons() -> None:
    """Create favicon variants required by the site."""
    if not BASE_ICON.exists():
        raise FileNotFoundError(f"Base favicon not found: {BASE_ICON}")

    with Image.open(BASE_ICON) as source_image:
        source_image = source_image.convert("RGBA")
        for size, output_path in OUTPUTS.items():
            resized_image = source_image.resize((size, size), Image.Resampling.LANCZOS)
            output_path.parent.mkdir(parents=True, exist_ok=True)
            resized_image.save(output_path)
            print(f"Saved {output_path} ({size}x{size})")


if __name__ == "__main__":
    generate_favicons()
