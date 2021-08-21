const $kurlc_rules = [
    {
        name: 'Global',
        match: /.*/,
        rules: ['ga_source', 'ga_medium', 'ga_term', 'ga_content', 'ga_campaign', 'ga_place', 'utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term', 'gclid', 'gclsrc'],
        replace: []
    },
    {
        name: 'audible.com',
        match: /www.audible.com/i,
        rules: ['qid', 'sr', 'pf_rd_p', 'pf_rd_r', 'plink', 'ref'],
        replace: []
    },
    {
        name: 'bandcamp.com',
        match: /.*.bandcamp.com/gi,
        rules: ['from', 'search_item_id', 'search_item_type', 'search_match_part', 'search_page_id', 'search_page_no', 'search_rank', 'search_sig'],
        replace: []
    },
    {
        name: 'amazon.com',
        match: /www.amazon.(com|co.[a-z]{2,3})/i,
        rules: ['linkId', 'tag', 'linkCode', 'ms3_c', 'pf_rd_s', 'pf_rd_t', ' pf_rd_i', 'pf_rd_m', 'pd_rd_w', 'qid', 'sr', 'keywords', 'dchild', 'ref', 'ref_', 'rnid', 'pf_rd_r', 'pf_rd_p', 'pd_rd_r', 'smid', 'pd_rd_wg'],
        replace: [/(\/ref|&ref_)=[^\/?]*/i]
    },
    {
        name: 'reddit.com',
        match: /.*.reddit.com/i,
        rules: ['ref_campaign', 'ref_source'],
        replace: []
    },
    {
        name: 'twitch.tv',
        match: /www.twitch.tv/i,
        rules: ['tt_medium', 'tt_content', 'tt_email_id'],
        replace: []
    },
    {
        name: 'blog.twitch.tv',
        match: /blog.twitch.tv/i,
        rules: ['utm_referrer'],
        replace: []
    },
    {
        name: 'pixiv.net',
        match: /www.pixiv.net/i,
        rules: ['p', 'i', 'g'],
        replace: []
    },
    {
        name: 'spotify.com',
        match: /open.spotify.com/i,
        rules: ['si', 'utm_source', 'context'],
        replace: []
    },
    {
        name: 'aliexpress.com',
        match: /.*.aliexpress.com/i,
        rules: ['_t', 'spm', 'algo_pvid', 'algo_expid', 'btsid', 'ws_ab_test', 'initiative_id', 'origin', 'widgetId', 'tabType', 'productId', 'productIds', 'gps-id', 'scm', 'scm_id', 'scm-url', 'pvid'],
        replace: []
    },
    {
        name: 'google.com',
        match: /www.google\..*/i,
        rules: ['sourceid', 'client', 'aqs', 'sxsrf', 'uact', 'ved', 'iflsig', 'source', 'ei', 'oq', 'gs_lcp', 'sclient', 'bih', 'biw', 'sa', 'dpr'],
        replace: []
    },
    {
        name: 'youtube.com',
        match: /.*.youtube.com/i,
        rules: ['gclid'],
        replace: []
    },
    {
        name: 'humblebundle.com',
        match: /www.humblebundle.com/i,
        rules: ['hmb_source', 'hmb_medium', 'hmb_campaign', 'mcID', 'linkID'],
        replace: []
    },
    {
        name: 'greenmangaming.com',
        match: /www.greenmangaming.com/i,
        rules: ['CJEVENT', 'cjevent'],
        replace: []
    },
    {
        name: 'fanatical.com',
        match: /www.fanatical.com/i,
        rules: ['cj_pid', 'cj_aid', 'aff_track', 'CJEVENT', 'cjevent'],
        replace: []
    },
    {
        name: 'gamebillet.com',
        match: /www.gamebillet.com/i,
        rules: ['affiliate'],
        replace: []
    },
    {
        name: 'newsweek.com',
        match: /www.newsweek.com/i,
        rules: ['subref'],
        replace: []
    },
    {
        name: 'imgur.com',
        match: /imgur.com/i,
        rules: ['source'],
        replace: []
    },
    {
        name: 'plex.tv',
        match: /.*.plex.tv/i,
        rules: ['origin', 'plex_utm', 'sl', 'ckhid'],
        replace: []
    },
    {
        name: 'imdb.com',
        match: /www.imdb.com/i,
        rules: ['ref_', 'pf_rd_m', 'pf_rd_r', 'pf_rd_p', 'pf_rd_s', 'pf_rd_t', 'pf_rd_i'],
        replace: []
    },
    {
        name: 'gog.com',
        match: /www.gog.com/i,
        rules: ['at_gd'],
        replace: []
    },
    {
        name: 'tiktok.com',
        match: /www.tiktok.com/i,
        rules: ['is_copy_url', 'is_from_webapp', 'sender_device', 'sender_web_id'],
        replace: []
    },
    {
        name: 'facebook.com',
        match: /www.facebook.com/i,
        rules: ['fbclid', 'fb_ref', 'fb_source'],
        replace: []
    },
    {
        name: 'yandex.com',
        match: /yandex.com/i,
        rules: ['lr', 'from', 'grhow', 'origin', '_openstat'],
        replace: []
    },
    {
        name: 'store.steampowered.com',
        match: /store.steampowered.com/i,
        rules: ['snr'],
        replace: []
    },
    {
        name: 'findojobs.co.nz',
        match: /www.findojobs.co.nz/i,
        rules: ['source'],
        replace: []
    },
    {
        name: 'linkedin.com',
        match: /.*.linkedin.com/i,
        rules: ['contextUrn', 'destRedirectURL', 'lipi', 'licu', 'trk', 'trkInfo', 'originalReferer', 'upsellOrderOrigin', 'upsellTrk', 'upsellTrackingId', 'src'],
        replace: []
    },
    {
        name: 'indeed.com',
        match: /.*.indeed.com/i,
        rules: ['from', 'attributionid'],
        replace: []
    },
    {
        name: 'discord.com',
        match: /.*.discord.com/i,
        rules: ['source'],
        replace: []
    },
    {
        name: 'medium.com',
        match: /medium.com/i,
        rules: ['source'],
        replace: []
    },
    {
        name: 'twitter.com',
        match: /twitter.com/i,
        rules: ['s', 'src', 'ref_url', 'ref_src'],
        replace: []
    },
    {
        name: 'voidu.com',
        match: /voidu.com/i,
        rules: ['affiliate'],
        replace: []
    },
    {
        name: 'wingamestore.com',
        match: /wingamestore.com/i,
        rules: ['ars'],
        replace: []
    },
    {
        name: 'gamebillet.com',
        match: /gamebillet.com/i,
        rules: ['affiliate'],
        replace: []
    },
    {
        name: 'gamesload.com',
        match: /gamesload.com/i,
        rules: ['affil'],
        replace: []
    },
    {
        name: 'mightyape',
        match: /mightyape.co.(nz|au)/i,
        rules: ['m'],
        replace: []
    },
    {
        name: 'music.apple.com',
        match: /music.apple.com/i,
        rules: ['uo', 'app', 'at', 'ct', 'ls'],
        replace: []
    },
    {
        name: 'play.google.com',
        match: /play.google.com/i,
        rules: ['referrer'],
        replace: []
    }
];


var module = module ?? { exports: null };
module.exports = $kurlc_rules;
