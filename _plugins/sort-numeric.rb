module Jekyll
  module SortNumeric
    def sort_numeric(input, key = nil)
      if key.nil?
        input.sort_by { |el| el.to_i }
      else
        input.sort_by do |item|
          value = item.data[key] || item[key]
          value.to_i
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::SortNumeric)
