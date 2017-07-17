require 'spec_helper'
require 'zombie'

describe Zombie do
    it "is named Ash" do
        zombie = Zombie.new
        zombie.name.should == 'Ash'
    end

    it "has no brain" do
        zombie = Zombie.new
        zombie.brains.should be < 1
    end

    it "is hungry" do
        zombie = Zombie.new
        zombie.should be_hungry
    end
end