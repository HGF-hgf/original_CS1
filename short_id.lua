local ids = {
    "IB26Z", "g6Wzm", "x1tUu", "gBDHs", "hvT3y",
    "mICRI", "BPhKq", "u2Fn6", "Q8vVa", "YhGB8",
    "DDw7g", "C81ST", "Q17QU", "uaZgi", "A7aMs",
    "BLvJv", "BAmgM", "HfBRA", "uMScb", "bmUlL"
  }
  local counter = 0
  
  request = function()
    counter = (counter % #ids) + 1
    local id = ids[counter]
    local response = wrk.format("GET", "/short/" .. id)
  
    -- Gửi request và trả về response
    return response
  end
  