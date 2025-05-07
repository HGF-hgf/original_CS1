-- shorten_url.lua
local counter = 0

request = function()
  counter = counter + 1
  local long_url = "https://example.com/page/" .. counter
  local payload = '{"long_url":"' .. long_url .. '"}'
  
  return wrk.format("POST", "/create", 
    {["Content-Type"] = "application/json"}, 
    payload)
end