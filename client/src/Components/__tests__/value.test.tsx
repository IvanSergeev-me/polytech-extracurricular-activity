import { value } from "../../Assets/Utils/value";

test("Больше ста",()=>{
    expect(value(300)).toBe(true);
})