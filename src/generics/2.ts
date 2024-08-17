type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type PickType<T, K extends keyof T> = Pick<T, K>;

function compare<T extends AllType>(
  top: PickType<T, "name" | "color">,
  bottom: PickType<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
