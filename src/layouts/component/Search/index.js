import { useState, useEffect, useRef } from 'react';
import {
    faCircleXmark,
    faSpinner,

    // faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Wrapper as WrapperPopper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/Components/icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import * as request from '~/ustil/request';

const cx = classNames.bind(Styles);

function Search() {
    const [searchValue, setsearchvalue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [ShowResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            try {
                const res = await request.get(`users/search`, {
                    params: {
                        q: debounced,
                        type: 'less',
                    },
                });
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounced]);
    const handleHideResults = () => setShowResult(false);

    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body} // giải quết warning tippy khi nhập dư liệu vào input
                interactive
                visible={ShowResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('Search-result')} tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('Search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </WrapperPopper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('Search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm Kiếm"
                        onChange={(e) => setsearchvalue(e.target.value.trimStart())}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setsearchvalue('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('Search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
