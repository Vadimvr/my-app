import React from 'react';

import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
                placeholder='Поиск ...' />
            <MySelect
                value={filter.sorting}
                onChange={selectedSort => setFilter({ ...filter, sorting: selectedSort })}
                defaultValue='Сортировка'
                options={[
                    { value: 'name', name: 'По имени' },
                    { value: 'description', name: 'По описанию' },
                ]}
            />
        </div>
    );
};

export default PostFilter;