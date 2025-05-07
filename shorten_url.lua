local counter = 0

request = function()
  counter = counter + 1
  local long_url = "https://example.com/page/" .. counter
  local query_url = "/create?url=" .. long_url
  
  return wrk.format("POST", query_url)
end
