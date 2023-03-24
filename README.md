# ReactTidyCal

Embed [TidyCal](https://tidycal.com/) into your react webpage

# Usage

```tsx
import { ReactTidyCal } from "react-tidycal";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start flex-grow w-full px-[8%] mt-[92px]">
      <h3 className="font-medium text-2xl text-[#A5A5A5] md:text-dark leading-[29px] mb-5">
        Book a session
      </h3>
      <div className="w-full">
        <ReactTidyCal path="photoruum/2-hour-studio-session" />
      </div>
    </div>
  );
}
```
