local ids = {"EjIBY", "KHc0S", "Qqb9b", "c0x27", "XuKWV", "NoHpg", "43IBP", "8VWEF", "ypLKP", "DCFx6"}
local counter = 0
request = function()
  counter = (counter % #ids) + 1
  local id = ids[counter]
  return wrk.format("GET", "/short/" .. id)
end
