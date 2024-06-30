const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IPublishedFileService
 * **/
class IPublishedFileService extends Base {

    constructor(key) {
        super(key, 'IPublishedFileService');
        this.Enums = {
            EPublishedFileQueryType: {
                k_PublishedFileQueryType_RankedByVote: 0,
                k_PublishedFileQueryType_RankedByPublicationDate: 1,
                k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate: 2,
                k_PublishedFileQueryType_RankedByTrend: 3,
                k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate: 4,
                k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate: 5,
                k_PublishedFileQueryType_RankedByNumTimesReported: 6,
                k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate: 7,
                k_PublishedFileQueryType_NotYetRated: 8,
                k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions: 9,
                k_PublishedFileQueryType_RankedByTotalVotesAsc: 10,
                k_PublishedFileQueryType_RankedByVotesUp: 11,
                k_PublishedFileQueryType_RankedByTextSearch: 12,
                k_PublishedFileQueryType_RankedByPlaytimeTrend: 13,
                k_PublishedFileQueryType_RankedByTotalPlaytime: 14,
                k_PublishedFileQueryType_RankedByAveragePlaytimeTrend: 15,
                k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime: 16,
                k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend: 17,
                k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions: 18,
                k_PublishedFileQueryType_RankedByInappropriateContentRating: 19,
                k_PublishedFileQueryType_RankedByBanContentCheck: 20,
                k_PublishedFileQueryType_RankedByLastUpdatedDate: 21,
            },
            EPublishedFileInfoMatchingFileType: {
                k_PFI_MatchingFileType_Items: 0,
                k_PFI_MatchingFileType_Collections: 1,
                k_PFI_MatchingFileType_Art: 2,
                k_PFI_MatchingFileType_Videos: 3,
                k_PFI_MatchingFileType_Screenshots: 4,
                k_PFI_MatchingFileType_CollectionEligible: 5,
                k_PFI_MatchingFileType_Games: 6,
                k_PFI_MatchingFileType_Software: 7,
                k_PFI_MatchingFileType_Concepts: 8,
                k_PFI_MatchingFileType_GreenlightItems: 9,
                k_PFI_MatchingFileType_AllGuides: 10,
                k_PFI_MatchingFileType_WebGuides: 11,
                k_PFI_MatchingFileType_IntegratedGuides: 12,
                k_PFI_MatchingFileType_UsableInGame: 13,
                k_PFI_MatchingFileType_Merch: 14,
                k_PFI_MatchingFileType_ControllerBindings: 15,
                k_PFI_MatchingFileType_SteamworksAccessInvites: 16,
                k_PFI_MatchingFileType_Items_Mtx: 17,
                k_PFI_MatchingFileType_Items_ReadyToUse: 18,
                k_PFI_MatchingFileType_WorkshopShowcase: 19,
                k_PFI_MatchingFileType_GameManagedItems: 20
            }
        };
    }

    Delete(publishedfileid, appid) {
        return this.get('Delete', {
            key: this.key,
            publishedfileid,
            appid,
        }, undefined, this.apiUrl);
    }

    QueryFiles(query_type, page, cursor, numperpage, creator_appid, appid, requiredtags, excludedtags, match_all_tags, required_flags, omitted_flags, search_text, filetype, child_publishedfileid, days, include_recent_votes_only, cache_max_age_seconds, language, required_kv_tags, totalonly, ids_only, return_vote_data, return_tags, return_kv_tags, return_previews, return_children, return_short_description, return_for_sale_data, return_metadata, return_playtime_stats) {
        return this.get('QueryFiles', {
            key: this.key,
            query_type,
            page,
            cursor,
            numperpage,
            creator_appid,
            appid,
            requiredtags,
            excludedtags,
            match_all_tags,
            required_flags,
            omitted_flags,
            search_text,
            filetype,
            child_publishedfileid,
            days,
            include_recent_votes_only,
            cache_max_age_seconds,
            language,
            required_kv_tags,
            totalonly,
            ids_only,
            return_vote_data,
            return_tags,
            return_kv_tags,
            return_previews,
            return_children,
            return_short_description,
            return_for_sale_data,
            return_metadata,
            return_playtime_stats
        }, undefined, this.apiUrl);
    }

    SetDeveloperMetadata(publishedfileid, appid, metadata) {
        return this.post('SetDeveloperMetadata', {
            key: this.key,
            publishedfileid,
            appid,
            metadata
        });
    }

    UpdateAppUGCBan(steamid, appid, expiration_time, reason) {
        return this.post('UpdateAppUGCBan', {
            key: this.key,
            steamid,
            appid,
            expiration_time,
            reason
        });
    }

    UpdateBanStatus(publishedfileid, appid, banned, reason) {
        return this.post('UpdateBanStatus', {
            key: this.key,
            publishedfileid,
            appid,
            banned,
            reason
        });
    }

    UpdateIncompatibleStatus(publishedfileid, appid, incompatible) {
        return this.post('UpdateIncompatibleStatus', {
            key: this.key,
            publishedfileid,
            appid,
            incompatible
        });
    }

    UpdateTags(publishedfileid, appid, add_tags, remove_tags) {
        return this.post('UpdateTags', {
            key: this.key,
            publishedfileid,
            appid,
            add_tags,
            remove_tags
        });
    }

}


module.exports = {IPublishedFileService};