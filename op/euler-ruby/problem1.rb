sum = 0

def getMultiplierSum val, div
    sum = 0
    if (val < 1 || div < 1) then return sum end

    div.times do |i|
        if i%val == 0 then
            sum += i
        end
    end
    return sum
end

puts getMultiplierSum(3, 1000) + getMultiplierSum(5, 1000) -  getMultiplierSum(15, 1000)